import React from 'react'
import Person1 from '../assets/person1.jpg'
import Person2 from '../assets/person2.jpg'
import Person3 from '../assets/person3.jpg'


const Test = () => {
  return (
    <>
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={Person1} />
          <p class="leading-relaxed">I recently had a child and had no prior experience on how to handle one. Mahek was quite a brilliant student at school until she started acting out, and her grades started deteriorating drastically. Not knowing what to do, I went to Dr. Pooja Gupta, and she did wonders. </p>
          <span class="inline-block h-1 w-10 rounded bg-blue-800 mt-6 mb-4"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">Atharv</h2>
          <h3>⭐⭐⭐⭐⭐</h3>
        </div>
      </div>
      <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={Person2} />
          <p class="leading-relaxed">I was a non-believer of psychotherapy until I visited Dr. Pooja Gupta. I was having trouble sleeping but did not know why. She was patient enough to understand my problem and explained why this is happening to me and how I can solve it. I am really glad to have doctors like this in our country. </p>
          <span class="inline-block h-1 w-10 rounded bg-blue-800 mt-6 mb-4"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">Astha</h2>
          <h3>⭐⭐⭐⭐</h3>
        </div>
      </div>
      <div class="lg:w-1/3 lg:mb-0 p-4">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={Person3}/>
          <p class="leading-relaxed">I would 100% recommend PsyWell Being. I was suffering from chronic depression, and Dr. Pooja Gupta did not just medicate me but helped me through my recovery. She was there every time I needed some guidance. If you are going through something, please visit here. </p>
          <span class="inline-block h-1 w-10 rounded bg-blue-800 mt-6 mb-4"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">Devanshi</h2>
          <h3>⭐⭐⭐⭐⭐</h3>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Test 