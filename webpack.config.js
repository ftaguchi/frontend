// Utilizando a variável path evita-se que essa construção de caminho fique exclusiva para cada Sistema Operacional
const path = require ('path');
module.exports={
    // Primeiro arquivo que vai ser carregado
    entry: path.resolve(__dirname,'src','index.js'),
    output:{
        path: path.resolve(__dirname,'public',),
        filename: 'bundle.js'
    },
    // Usado para monitorar atualizações em arquivos JS
    devServer:{
        contentBase: path.resolve(__dirname, 'public'),
    },
    // Regras para carregar os loaders de acordo com cada extensão de arquivo
    module:{
        rules:[
            // Regra para arquivos JS
            {
                // Propriedade obrigatória que procura arquivos que terminam com JS
                test: /\.js$/,
                exclude: /node_modules/,
                // Converter usando o loader
                use:{
                    loader: 'babel-loader',
                }
            },
            {
                // css-loader carrega o arquivo css e verifica as importações do arquivos
                // style-loader executa o css carregado
                test: /\.css$/,
                exclude: /node_modules/,
                use:[
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                ]
            },
            {
                // i garante que seja case insensitive
                test: /.*\.(gif|png|jpe?g)$/i,
                use:{
                    loader: 'file-loader',
                }
            }
        ]
    },
};