/* import inicial from '../assets/inicial.png'
import primaria from '../assets/childs.png'
import secundaria from '../assets/genericSec.png' */

export const Niveles = () => {

  return (

    <section className="py-8 flex flex-col sm:flex-row justify-center">
        <article className="py-4 px-2 my-2 border-l-4 border-red-600">
          <h3 className='font-extrabold text-sky-600'>Inicial</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium repellendus velit provident blanditiis sapiente libero! Delectus aperiam quaerat magni, facilis at quidem voluptatem laborum molestiae quam placeat, temporibus, saepe obcaecati?</p>
        </article>

        <article className="py-4 px-2 my-2 border-l-4 border-red-600">
          <h3 className='font-extrabold text-sky-600'>Primario</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem hic id consectetur velit ab iure fugiat? Voluptas blanditiis totam aliquam illum! Dignissimos officia vel placeat nisi laborum quod similique eligendi.</p>
        </article>

        <article className="py-4 px-2 my-2 border-l-4 border-red-600">
          <h3 className='font-extrabold text-sky-600'>Secundario</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sequi, aspernatur temporibus optio officia fugit nemo totam eaque modi obcaecati nihil mollitia earum soluta saepe culpa dicta accusantium, laudantium dignissimos.</p>
        </article>
        
      </section>
  )
  }