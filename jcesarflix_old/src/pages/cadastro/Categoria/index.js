import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';


function CadastroCategoria() {


 const [nomeDaCategoria, setNomeDaCategoria] = useState('Valor inicial');
  
    return (
      <PageDefault>
        <h1>Cadastro de Categoria: {nomeDaCategoria}</h1>
        <form>

          <label>
            Nome da Categoria:
            <input
              type="text"
              value={nomeDaCategoria}
              onChange={function funcaoHandLerQueErroPediu(infosDoEvento) {
                setNomeDaCategoria(infosDoEvento.target.value);
              } }
            />
          </label>

          <button>
            Cadastrar
          </button>
        </form>
        <Link to="/">
          Ir para home
        </Link>
      </PageDefault>
    )
  }
  
export default CadastroCategoria;