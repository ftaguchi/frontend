// Criação do componente principal App
import React, { useState } from 'react';

// Importação das regras CSS e de uma imagem
import './App.css';
import backgroundImage from './assets/tecnologia.jpg';

// Importação dos componentes
import Header from './components/Header';

function App(){

    //useState retorna um array com 2 posições
    // A primeira variável retorna o valor inicial
    // A segunda é uma função utilizada para atualizar o valor
    // A desestruturação facilita a busca de valores dentro do vetor

    const [projects, setProjects] = useState(['Desenvolvimento mobile', 'Frontend website']);

    //Função para cadastrar um projeto
    function handleAddProject(){

        //projects.push(`Novo Projeto ${Date.now()}`);
        // Usado para atualizar o valor do array e garante a imutabilidade
        setProjects([...projects, `Novo Projeto ${Date.now()}`]);
        console.log(projects);
    }

    return(
        <>
            <Header title = "Projects"/>
            
            <img width={300} src={backgroundImage} />
            <ul>
                {projects.map(project => <li key={project}> {project} </li>)}
            </ul>

            <button type="button" onClick={handleAddProject}> Adicionar projeto </button>
        </>
    );
}

export default App;