import React, { useEffect, useMemo, useState } from 'react';
import AppLayout from '@/components/AppLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Pencil, Trash2, Plus, Upload, X } from 'lucide-react';

type Tipo = 'PDF' | 'EPUB' | 'AUDIOBOOK';
type Status = 'ATIVO' | 'INATIVO' | 'PROCESSANDO' | 'ERRO';

type Livro = {
  id: number;
  nome: string;
  autor?: string;
  descricao?: string;
  genero?: string;
  ano?: number | null;
  isbn?: string | null;
  tipo: Tipo;
  arquivo_bucket?: string | null;
  arquivo_key?: string | null;
  tamanho_bytes?: number | null;
  capa_bucket?: string | null;
  capa_key?: string | null;
  duracao_segundos?: number | null;
  status: Status;
  created_at?: string;
  updated_at?: string;
};

const STORAGE_KEY = 'admin:livros';

const emptyLivro = (): Partial<Livro> => ({
  nome: '',
  autor: '',
  descricao: '',
  genero: '',
  ano: null,
  isbn: '',
  tipo: 'PDF',
  arquivo_bucket: null,
  arquivo_key: null,
  tamanho_bytes: null,
  capa_bucket: null,
  capa_key: null,
  duracao_segundos: null,
  status: 'PROCESSANDO',
});

const BooksAdmin: React.FC = () => {
  const [items, setItems] = useState<Livro[]>([]);
  const [editing, setEditing] = useState<Partial<Livro> | null>(null);
  const [filter, setFilter] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [uploadingArquivo, setUploadingArquivo] = useState(false);
  const [uploadingCapa, setUploadingCapa] = useState(false);
  const [arquivoSelecionado, setArquivoSelecionado] = useState<File | null>(null);
  const [capaSelecionada, setCapaSelecionada] = useState<File | null>(null);

  // Carregar livros do localStorage
  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as Livro[];
        setItems(parsed);
      } catch {
        setItems([]);
      }
    }
  }, []);

  // Salvar livros no localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const nextId = useMemo(() => items.reduce((max, i) => Math.max(max, i.id), 0) + 1, [items]);

  const startCreate = () => {
    setEditing(emptyLivro());
    setArquivoSelecionado(null);
    setCapaSelecionada(null);
    setDialogOpen(true);
  };

  const startEdit = (l: Livro) => {
    setEditing({ ...l });
    setArquivoSelecionado(null);
    setCapaSelecionada(null);
    setDialogOpen(true);
  };

  const handleUploadArquivo = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setArquivoSelecionado(file);

    if (!editing?.id) {
      toast({
        title: 'Salve o livro primeiro',
        description: 'Crie o livro antes de fazer upload',
        variant: 'destructive',
      });
      return;
    }

    setUploadingArquivo(true);
    try {
      const formData = new FormData();
      formData.append('arquivo', file);

      const token = localStorage.getItem('lognet-token');
      const response = await fetch(`/api/v1/livros/${editing.id}/arquivo`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Erro ao fazer upload do arquivo');
      }

      const data = await response.json();
      setEditing({
        ...editing,
        arquivo_bucket: data.bucket,
        arquivo_key: data.key,
        tamanho_bytes: data.tamanho,
        status: 'ATIVO',
      });

      toast({ title: 'Arquivo enviado com sucesso!' });
    } catch (error) {
      toast({
        title: 'Erro ao fazer upload',
        description: error instanceof Error ? error.message : 'Tente novamente',
        variant: 'destructive',
      });
    } finally {
      setUploadingArquivo(false);
    }
  };

  const handleUploadCapa = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setCapaSelecionada(file);

    if (!editing?.id) {
      toast({
        title: 'Salve o livro primeiro',
        description: 'Crie o livro antes de fazer upload',
        variant: 'destructive',
      });
      return;
    }

    setUploadingCapa(true);
    try {
      const formData = new FormData();
      formData.append('capa', file);

      const token = localStorage.getItem('lognet-token');
      const response = await fetch(`/api/v1/livros/${editing.id}/capa`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Erro ao fazer upload da capa');
      }

      const data = await response.json();
      setEditing({
        ...editing,
        capa_bucket: data.bucket,
        capa_key: data.key,
      });

      toast({ title: 'Capa enviada com sucesso!' });
    } catch (error) {
      toast({
        title: 'Erro ao fazer upload',
        description: error instanceof Error ? error.message : 'Tente novamente',
        variant: 'destructive',
      });
    } finally {
      setUploadingCapa(false);
    }
  };

  const save = () => {
    if (!editing || !editing.nome) {
      toast({ title: 'Nome é obrigatório', variant: 'destructive' });
      return;
    }

    if ((editing as Livro).id) {
      const id = (editing as Livro).id;
      setItems((prev) =>
        prev.map((p) =>
          p.id === id
            ? {
                ...(p as Livro),
                ...(editing as Livro),
                updated_at: new Date().toISOString(),
              }
            : p
        )
      );
      toast({ title: 'Livro atualizado' });
    } else {
      const now = new Date().toISOString();
      const newItem: Livro = {
        id: nextId,
        nome: editing.nome || '',
        autor: editing.autor || '',
        descricao: editing.descricao || '',
        genero: editing.genero || '',
        ano: editing.ano || null,
        isbn: editing.isbn || null,
        tipo: (editing.tipo || 'PDF') as Tipo,
        arquivo_bucket: editing.arquivo_bucket || null,
        arquivo_key: editing.arquivo_key || null,
        tamanho_bytes: editing.tamanho_bytes || null,
        capa_bucket: editing.capa_bucket || null,
        capa_key: editing.capa_key || null,
        duracao_segundos: editing.duracao_segundos || null,
        status: (editing.status || 'ATIVO') as Status,
        created_at: now,
        updated_at: now,
      };
      setItems((prev) => [newItem, ...prev]);
      toast({ title: 'Livro criado' });
    }

    setEditing(null);
    setArquivoSelecionado(null);
    setCapaSelecionada(null);
    setDialogOpen(false);
  };

  const remove = (id: number) => {
    if (!confirm('Remover este livro?')) return;
    setItems((prev) => prev.filter((p) => p.id !== id));
    toast({ title: 'Livro removido' });
  };

  const filtered = items.filter(
    (i) =>
      i.nome.toLowerCase().includes(filter.toLowerCase()) ||
      (i.autor || '').toLowerCase().includes(filter.toLowerCase())
  );

  const getStatusColor = (status: Status) => {
    switch (status) {
      case 'ATIVO':
        return 'bg-green-100 text-green-800';
      case 'INATIVO':
        return 'bg-gray-100 text-gray-800';
      case 'PROCESSANDO':
        return 'bg-blue-100 text-blue-800';
      case 'ERRO':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <AppLayout>
      <div className="min-h-[calc(100vh-4rem)] flex flex-col">
        {/* Header */}
        <div className="px-6 py-5 border-b bg-background">
          <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold">Administração de Livros</h1>
              <p className="text-sm text-muted-foreground mt-1">Gerencie o catálogo — crie, edite e remova livros.</p>
            </div>
            <div className="flex items-center gap-3">
              <Input
                placeholder="Buscar por nome ou autor"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-80"
              />
              <Button onClick={startCreate} className="inline-flex items-center gap-2">
                <Plus size={16} /> Novo livro
              </Button>
            </div>
          </div>
        </div>

        {/* Main */}
        <div className="flex-1 overflow-hidden">
          <div className="max-w-[1400px] mx-auto h-full p-6">
            {/* List */}
            <div className="bg-card rounded-lg p-6 overflow-auto">
              {filtered.length === 0 ? (
                <div className="h-96 flex items-center justify-center text-muted-foreground">
                  Nenhum livro encontrado.
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filtered.map((l) => (
                    <div key={l.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      {/* Capa (placeholder) */}
                      <div className="w-full h-48 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg mb-4 flex items-center justify-center">
                        <div className="text-center">
                          <p className="text-xs text-muted-foreground">Sem capa</p>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="space-y-2">
                        <div>
                          <h3 className="font-semibold text-sm line-clamp-2">{l.nome}</h3>
                          <p className="text-xs text-muted-foreground line-clamp-1">{l.autor || 'Desconhecido'}</p>
                        </div>

                        {/* Badges */}
                        <div className="flex gap-2 flex-wrap">
                          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                            {l.tipo}
                          </span>
                          <span className={`text-xs px-2 py-1 rounded ${getStatusColor(l.status)}`}>
                            {l.status}
                          </span>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2 pt-2">
                          <button
                            onClick={() => startEdit(l)}
                            className="flex-1 text-xs py-1 rounded border hover:bg-gray-50 flex items-center justify-center gap-1"
                          >
                            <Pencil size={12} /> Editar
                          </button>
                          <button
                            onClick={() => remove(l.id)}
                            className="flex-1 text-xs py-1 rounded border border-red-200 hover:bg-red-50 text-red-600 flex items-center justify-center gap-1"
                          >
                            <Trash2 size={12} /> Remover
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Modal */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editing?.id ? 'Editar livro' : 'Novo livro'}</DialogTitle>
              <DialogDescription>Preencha os dados do livro e faça upload dos arquivos.</DialogDescription>
            </DialogHeader>

            {editing && (
              <Tabs defaultValue="info" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="info">Informações</TabsTrigger>
                  <TabsTrigger value="arquivo">Arquivo</TabsTrigger>
                  <TabsTrigger value="capa">Capa</TabsTrigger>
                </TabsList>

                {/* Tab: Informações */}
                <TabsContent value="info" className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold">Nome *</label>
                      <Input
                        value={editing.nome || ''}
                        onChange={(e) => setEditing({ ...editing, nome: e.target.value })}
                        placeholder="Nome do livro"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold">Autor</label>
                      <Input
                        value={editing.autor || ''}
                        onChange={(e) => setEditing({ ...editing, autor: e.target.value })}
                        placeholder="Nome do autor"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold">Descrição</label>
                    <Textarea
                      value={editing.descricao || ''}
                      onChange={(e) => setEditing({ ...editing, descricao: e.target.value })}
                      placeholder="Descrição do livro"
                      className="mt-1 resize-none"
                      rows={3}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="text-xs font-semibold">Tipo</label>
                      <select
                        className="w-full rounded border border-input bg-background px-3 py-2 mt-1 text-sm"
                        value={editing.tipo || 'PDF'}
                        onChange={(e) => setEditing({ ...editing, tipo: e.target.value as Tipo })}
                      >
                        <option value="PDF">PDF</option>
                        <option value="EPUB">EPUB</option>
                        <option value="AUDIOBOOK">AUDIOBOOK</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold">Status</label>
                      <select
                        className="w-full rounded border border-input bg-background px-3 py-2 mt-1 text-sm"
                        value={editing.status || 'ATIVO'}
                        onChange={(e) => setEditing({ ...editing, status: e.target.value as Status })}
                      >
                        <option value="ATIVO">ATIVO</option>
                        <option value="INATIVO">INATIVO</option>
                        <option value="PROCESSANDO">PROCESSANDO</option>
                        <option value="ERRO">ERRO</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold">Ano</label>
                      <Input
                        type="number"
                        value={editing.ano || ''}
                        onChange={(e) => setEditing({ ...editing, ano: e.target.value ? parseInt(e.target.value) : null })}
                        placeholder="YYYY"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold">ISBN</label>
                      <Input
                        value={editing.isbn || ''}
                        onChange={(e) => setEditing({ ...editing, isbn: e.target.value })}
                        placeholder="ISBN"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold">Gênero</label>
                      <Input
                        value={editing.genero || ''}
                        onChange={(e) => setEditing({ ...editing, genero: e.target.value })}
                        placeholder="Gênero"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  {editing.tipo === 'AUDIOBOOK' && (
                    <div>
                      <label className="text-xs font-semibold">Duração (segundos)</label>
                      <Input
                        type="number"
                        value={editing.duracao_segundos || ''}
                        onChange={(e) =>
                          setEditing({
                            ...editing,
                            duracao_segundos: e.target.value ? parseInt(e.target.value) : null,
                          })
                        }
                        placeholder="3600"
                        className="mt-1"
                      />
                    </div>
                  )}

                  {editing.created_at && (
                    <div className="text-xs text-muted-foreground bg-gray-50 p-3 rounded">
                      <div>Criado: {new Date(editing.created_at).toLocaleString('pt-BR')}</div>
                      {editing.updated_at && (
                        <div>Atualizado: {new Date(editing.updated_at).toLocaleString('pt-BR')}</div>
                      )}
                    </div>
                  )}
                </TabsContent>

                {/* Tab: Arquivo */}
                <TabsContent value="arquivo" className="space-y-4">
                  <div className="border-2 border-dashed rounded-lg p-8 text-center">
                    <Upload size={32} className="mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm font-semibold mb-1">Arquivo Principal</p>
                    <p className="text-xs text-muted-foreground mb-4">PDF, EPUB ou Audiobook</p>
                    <label>
                      <input
                        type="file"
                        accept=".pdf,.epub,.mp3,.m4b"
                        onChange={handleUploadArquivo}
                        disabled={uploadingArquivo}
                        className="hidden"
                      />
                      <button
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 disabled:opacity-50"
                        disabled={uploadingArquivo || !editing.id}
                        onClick={(e) => {
                          if (!editing.id) {
                            toast({
                              title: 'Salve o livro primeiro',
                              description: 'Crie ou edite o livro antes de fazer upload',
                              variant: 'destructive',
                            });
                            return;
                          }
                          (e.currentTarget.previousElementSibling as HTMLInputElement)?.click();
                        }}
                      >
                        <Upload size={16} />
                        {uploadingArquivo ? 'Enviando...' : 'Selecionar arquivo'}
                      </button>
                    </label>
                  </div>

                  {arquivoSelecionado && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-center justify-between">
                      <div className="text-sm">
                        <p className="font-semibold text-green-900">{arquivoSelecionado.name}</p>
                        <p className="text-xs text-green-700">
                          {(arquivoSelecionado.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                      <button
                        onClick={() => setArquivoSelecionado(null)}
                        className="p-1 text-green-600 hover:bg-green-100 rounded"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  )}

                  {editing.arquivo_key && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <p className="text-xs font-semibold text-blue-900 mb-1">Arquivo Armazenado</p>
                      <p className="text-xs text-blue-700">Bucket: {editing.arquivo_bucket}</p>
                      <p className="text-xs text-blue-700">Key: {editing.arquivo_key}</p>
                      {editing.tamanho_bytes && (
                        <p className="text-xs text-blue-700">
                          Tamanho: {(editing.tamanho_bytes / 1024 / 1024).toFixed(2)} MB
                        </p>
                      )}
                    </div>
                  )}
                </TabsContent>

                {/* Tab: Capa */}
                <TabsContent value="capa" className="space-y-4">
                  <div className="border-2 border-dashed rounded-lg p-8 text-center">
                    <Upload size={32} className="mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm font-semibold mb-1">Capa do Livro</p>
                    <p className="text-xs text-muted-foreground mb-4">JPG, PNG ou WebP</p>
                    <label>
                      <input
                        type="file"
                        accept=".jpg,.jpeg,.png,.webp"
                        onChange={handleUploadCapa}
                        disabled={uploadingCapa}
                        className="hidden"
                      />
                      <button
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 disabled:opacity-50"
                        disabled={uploadingCapa || !editing.id}
                        onClick={(e) => {
                          if (!editing.id) {
                            toast({
                              title: 'Salve o livro primeiro',
                              description: 'Crie ou edite o livro antes de fazer upload',
                              variant: 'destructive',
                            });
                            return;
                          }
                          (e.currentTarget.previousElementSibling as HTMLInputElement)?.click();
                        }}
                      >
                        <Upload size={16} />
                        {uploadingCapa ? 'Enviando...' : 'Selecionar imagem'}
                      </button>
                    </label>
                  </div>

                  {capaSelecionada && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-center justify-between">
                      <div className="text-sm">
                        <p className="font-semibold text-green-900">{capaSelecionada.name}</p>
                        <p className="text-xs text-green-700">
                          {(capaSelecionada.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                      <button
                        onClick={() => setCapaSelecionada(null)}
                        className="p-1 text-green-600 hover:bg-green-100 rounded"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  )}

                  {editing.capa_key && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <p className="text-xs font-semibold text-blue-900 mb-1">Capa Armazenada</p>
                      <p className="text-xs text-blue-700">Bucket: {editing.capa_bucket}</p>
                      <p className="text-xs text-blue-700">Key: {editing.capa_key}</p>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            )}

            <DialogFooter className="gap-2">
              <Button variant="secondary" onClick={() => setDialogOpen(false)}>
                Cancelar
              </Button>
              <Button onClick={save} disabled={!editing?.nome}>
                Salvar
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </AppLayout>
  );
};

export default BooksAdmin;