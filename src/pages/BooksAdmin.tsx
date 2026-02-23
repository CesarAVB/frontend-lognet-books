import React, { useEffect, useMemo, useState } from 'react';
import AppLayout from '@/components/AppLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Pencil, Trash2, Plus } from 'lucide-react';

type Tipo = 'PDF' | 'EPUB' | 'AUDIOBOOK';
type Status = 'ATIVO' | 'INATIVO' | 'PROCESSANDO';

type Livro = {
  id: number;
  nome: string;
  autor?: string;
  descricao?: string;
  genero?: string;
  ano?: string | null;
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
  ano: '',
  isbn: '',
  tipo: 'PDF',
  arquivo_bucket: '',
  arquivo_key: '',
  tamanho_bytes: null,
  capa_bucket: '',
  capa_key: '',
  duracao_segundos: null,
  status: 'PROCESSANDO',
});

const BooksAdmin: React.FC = () => {
  const [items, setItems] = useState<Livro[]>([]);
  const [editing, setEditing] = useState<Partial<Livro> | null>(null);
  const [filter, setFilter] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);

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

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const nextId = useMemo(() => items.reduce((max, i) => Math.max(max, i.id), 0) + 1, [items]);

  const startCreate = () => {
    setEditing(emptyLivro());
    setDialogOpen(true);
  };

  const startEdit = (l: Livro) => {
    setEditing({ ...l });
    setDialogOpen(true);
  };


  const save = () => {
    if (!editing || !editing.nome) {
      toast({ title: 'Nome é obrigatório', variant: 'destructive' });
      return;
    }
    if ((editing as Livro).id) {
      const id = (editing as Livro).id!;
      setItems((prev) =>
        prev.map((p) =>
          p.id === id ? { ...(p as Livro), ...(editing as Livro), updated_at: new Date().toISOString() } : p
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

  return (
    <AppLayout>
      <div className="min-h-[calc(100vh-4rem)] flex flex-col">
        {/* Header */}
        <div className="px-6 py-5 border-b bg-background">
          <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold">Administração de Livros</h1>
              <p className="text-sm text-muted-foreground mt-1">Gerencie o catálogo — crie, edite e remova livros.</p>
            </div>
            <div className="flex items-center gap-3">
              <Input placeholder="Buscar por nome ou autor" value={filter} onChange={(e) => setFilter(e.target.value)} className="w-80" />
              <Button onClick={startCreate} className="inline-flex items-center gap-2">
                <Plus size={14} /> Novo livro
              </Button>
            </div>
          </div>
        </div>

        {/* Main */}
        <div className="flex-1 overflow-hidden">
          <div className="max-w-[1200px] mx-auto h-full flex gap-6 p-6">
            {/* List */}
            <div className="flex-1 bg-card rounded-lg p-4 overflow-auto min-h-0">
              {filtered.length === 0 ? (
                <div className="h-full flex items-center justify-center text-muted-foreground">Nenhum livro encontrado.</div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filtered.map((l) => (
                    <div key={l.id} className="bg-white rounded-lg p-4 shadow-sm min-w-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-base truncate max-w-[18rem]">{l.nome}</h3>
                          <p className="text-sm text-muted-foreground truncate max-w-[18rem]">{l.autor}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button onClick={() => { setEditing(l); setDialogOpen(true); }} className="p-1 rounded text-muted-foreground hover:text-foreground">
                            <Pencil size={16} />
                          </button>
                          <button onClick={() => remove(l.id)} className="p-1 rounded text-destructive hover:bg-destructive/10">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>

                      <div className="mt-3 text-xs text-muted-foreground">
                        <div><strong>Tipo:</strong> {l.tipo}</div>
                        <div><strong>Status:</strong> {l.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Side panel */}
            <aside className="w-80 hidden lg:block">
                <div className="bg-card rounded-lg p-4 h-full sticky top-6" />
            </aside>
          </div>
        </div>

        {/* Modal */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="max-w-2xl w-full max-h-[90vh] overflow-auto">
            <DialogHeader>
              <DialogTitle>{editing && editing.id ? 'Editar livro' : 'Novo livro'}</DialogTitle>
              <DialogDescription>Preencha os dados do livro abaixo.</DialogDescription>
            </DialogHeader>

            {editing && (
              <div className="space-y-3 mt-2">
                <Input value={editing.nome || ''} onChange={(e) => setEditing({ ...editing, nome: e.target.value })} placeholder="Nome do livro" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <Input value={editing.autor || ''} onChange={(e) => setEditing({ ...editing, autor: e.target.value })} placeholder="Autor" />
                  <Input value={editing.ano || ''} onChange={(e) => setEditing({ ...editing, ano: e.target.value })} placeholder="Ano" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div>
                    <label className="text-xs font-medium">Tipo</label>
                    <select
                      className="w-full rounded border border-input bg-input px-3 py-2"
                      value={editing.tipo || 'PDF'}
                      onChange={(e) => setEditing({ ...editing, tipo: e.target.value as Tipo })}
                    >
                      <option value="PDF">PDF</option>
                      <option value="EPUB">EPUB</option>
                      <option value="AUDIOBOOK">AUDIOBOOK</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-medium">Status</label>
                    <select
                      className="w-full rounded border border-input bg-input px-3 py-2"
                      value={editing.status || 'ATIVO'}
                      onChange={(e) => setEditing({ ...editing, status: e.target.value as Status })}
                    >
                      <option value="ATIVO">ATIVO</option>
                      <option value="INATIVO">INATIVO</option>
                      <option value="PROCESSANDO">PROCESSANDO</option>
                    </select>
                  </div>
                </div>

                <Input value={editing.isbn || ''} onChange={(e) => setEditing({ ...editing, isbn: e.target.value })} placeholder="ISBN" />
                <Textarea value={editing.descricao || ''} onChange={(e) => setEditing({ ...editing, descricao: e.target.value })} placeholder="Descrição" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <Input value={editing.genero || ''} onChange={(e) => setEditing({ ...editing, genero: e.target.value })} placeholder="Gênero" />
                  <Input
                    type="number"
                    value={editing.duracao_segundos !== null && editing.duracao_segundos !== undefined ? String(editing.duracao_segundos) : ''}
                    onChange={(e) => setEditing({ ...editing, duracao_segundos: e.target.value ? parseInt(e.target.value, 10) : null })}
                    placeholder="Duração (segundos) — apenas para audiobook"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <Input value={editing.arquivo_bucket || ''} onChange={(e) => setEditing({ ...editing, arquivo_bucket: e.target.value })} placeholder="Arquivo - bucket" />
                  <Input value={editing.arquivo_key || ''} onChange={(e) => setEditing({ ...editing, arquivo_key: e.target.value })} placeholder="Arquivo - key" />
                  <Input
                    type="number"
                    value={editing.tamanho_bytes !== null && editing.tamanho_bytes !== undefined ? String(editing.tamanho_bytes) : ''}
                    onChange={(e) => setEditing({ ...editing, tamanho_bytes: e.target.value ? parseInt(e.target.value, 10) : null })}
                    placeholder="Tamanho (bytes)"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <Input value={editing.capa_bucket || ''} onChange={(e) => setEditing({ ...editing, capa_bucket: e.target.value })} placeholder="Capa - bucket" />
                  <Input value={editing.capa_key || ''} onChange={(e) => setEditing({ ...editing, capa_key: e.target.value })} placeholder="Capa - key" />
                </div>

                {editing.created_at && (
                  <div className="text-xs text-muted-foreground">
                    <div>Criado: {new Date(editing.created_at).toLocaleString()}</div>
                    <div>Atualizado: {editing.updated_at ? new Date(editing.updated_at).toLocaleString() : '-'}</div>
                  </div>
                )}
              </div>
            )}

            <DialogFooter>
              <Button onClick={save}>Salvar</Button>
              <Button variant="secondary" onClick={() => setDialogOpen(false)}>Cancelar</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </AppLayout>
  );
};

export default BooksAdmin;
