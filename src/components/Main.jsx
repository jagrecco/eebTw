
//hero, seccions
/* <main>
<article>
  <h1>Artículo Principal</h1>
  <p>Contenido del artículo principal...</p>
</article>

<aside>
  <section>
    <h2>Sección 1</h2>
    <p>Contenido de la sección 1...</p>
  </section>

  <section>
    <h2>Sección 2</h2>
    <p>Contenido de la sección 2...</p>
  </section>
</aside>
</main> */

import {Inscripcion} from './forms/Inscripcion'
import {Niveles} from './Niveles'

export const Main = () => {
  return (
    <main className="mx-6 text-left">
      
      <section className="">
        
        
        <Inscripcion/>
        <Niveles/>

      </section>


    </main>
  )
}


