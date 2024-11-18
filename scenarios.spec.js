// [Tarefa] Permitir acesso ao formulário
it.todo('ao clicar em Emitir nova NF, usuário deve ser redirecionado ao formulário')

// [Tarefa] Criar tela de formulário
it.todo('deve mostrar tela do formulário')

// [Tarefa] Validar formulário
it.todo('descrição deve ser preenchida')
it.todo('data deve ser preenchida')
it.todo('data deve estar no futuro')
it.todo('documento deve ser submetido')
it.todo('documento deve ter no máximo 5 MB')
it.todo('documento deve ser do tipo PDF')

// [Tarefa] Emitir nota
it.todo('emissão e eventos devem ser chamada se formulário for valido')
it.todo('ao emitir NF com sucesso, redirecionar para tela de sucesso')
it.todo('ao emitir NF com falha, redirecionar para tela de erro')

// [Tarefa] Criar da tela de sucesso
it.todo('deve mostrar tela de sucesso')
it.todo('ao clicar em Voltar, usuário deve voltar ao dashboard')

// [Tarefa] Criar da tela de erro
it.todo('deve mostrar tela de falha')
it.todo('ao clicar em Tentar Novamente, usuário deve voltar ao formulário')
