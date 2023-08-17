
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
        <h1 className="text-xl text-sky-600 font-extrabold">Inscripción 2024</h1>

        <p>Se encuentra abierta la Inscripción para el ciclo escolar 2024. Para recibir iformación al respecto por favor complete el formulario</p>
        <button className="bg-sky-600 font-bold text-neutral-100 p-2">Información</button>

        <Inscripcion/>
        <Niveles/>

      </section>


    </main>
  )
}


