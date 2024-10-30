if ! rails db:migrate; then
  echo "Migração do banco de dados falhou. Verifique os logs para mais detalhes."
  exit 1
fi

if ! rails assets:precompile; then
  echo "Falha na pré-compilação dos ativos. Verifique os logs para mais detalhes."
  exit 1
fi

bundle exec bin/rails server -b 0.0.0.0 -p ${PORT:-3000}
