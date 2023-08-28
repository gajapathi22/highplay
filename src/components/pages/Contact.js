import React from "react";
import contactUs from "../../assets/images/contactUs.jpg";
const Contact = () =>{
    return(
        <>
          <div class="container my-24 mx-auto md:px-5">
            <section class="mb-32">
              <div class="flex flex-wrap">
                <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-7/12 md:px-3 lg:px-6  max-h-[850px] overflow-y-auto mb-8">
                  <h2 class="mb-8 text-3xl font-bold">Frequently asked questions</h2>
                  <p class="mb-2 font-bold">1. What is a Human Library?</p>
                  <p class="mb-8 text-neutral-500 dark:text-neutral-300">
                  A Human Library is a unique concept that transforms people into "books." Each "book" is a person with a distinct life story, experiences, and perspectives. Users can "borrow" these human books to engage in one-on-one conversations and learn directly from their narratives.
                  </p>
                  <p class="mb-2 font-bold">2. How does the Human Library work?</p>
                  <p class="mb-8 text-neutral-500 dark:text-neutral-300">
                  The Human Library platform connects readers with human books, allowing them to browse and select individuals based on their stories of interest. Once a human book is chosen, readers can book an interactive session to have a live conversation, enabling a direct exchange of experiences and insights.
                  </p>
                  <p class="mb-2 font-bold">
                  3. Who are the human books?
                  </p>
                  <p class="mb-8 text-neutral-500 dark:text-neutral-300">
                  Human books represent a diverse range of backgrounds, cultures, professions, and life experiences. They include individuals who have overcome challenges, accomplished remarkable achievements, or possess unique viewpoints. Each human book contributes their personal narrative to foster understanding and connections.
                  </p>

                  <p class="mb-2 font-bold">
                  4. How can I become a human book?
                  </p>
                  <p class="text-neutral-500 dark:text-neutral-300">
                  If you have a compelling life story and are interested in sharing your experiences, you can apply to become a human book on our platform. We welcome diverse perspectives and encourage individuals from all walks of life to contribute their stories to our community.
                  </p>

                  <p class="mb-2 font-bold">
                  5. How do I participate as a reader?
                  </p>
                  <p class="text-neutral-500 dark:text-neutral-300">
                  Participating as a reader is easy. Simply sign up on our platform, browse the catalog of human books, and select a book that resonates with you. Book a session with the human book of your choice, and get ready for an engaging and enlightening conversation.                  </p>

                  <p class="mb-2 font-bold">
                  6. Are the sessions free?
                  </p>
                  <p class="text-neutral-500 dark:text-neutral-300">
                  Our platform operates on a nominal fee to support the efforts of our human books and maintain the quality of the interactions. The fees contribute to the upkeep of the platform and help compensate human books for their time and contributions.                  </p>

                  <p class="mb-2 font-bold">
                  7. What are the benefits of the Human Library?
                  </p>
                  <p class="text-neutral-500 dark:text-neutral-300">
                  The Human Library offers a powerful way to promote empathy, understanding, and connection among individuals from diverse backgrounds. It provides an opportunity to engage in open conversations, challenge stereotypes, and expand one's horizons through direct interactions with real people.                  </p>

                  <p class="mb-2 font-bold">
                  8. Is the Human Library only for serious topics?
                  </p>
                  <p class="text-neutral-500 dark:text-neutral-300">
                  Not at all! While the Human Library certainly addresses serious issues and life experiences, it's not limited to them. Our catalog includes books that cover a wide range of topics, from personal growth and professional journeys to hobbies, passions, and cultural insights.                  </p>
                
                  <p class="mb-2 font-bold">
                  9. Is my privacy protected as a human book?
                  </p>
                  <p class="text-neutral-500 dark:text-neutral-300">
                  Absolutely. We prioritize the privacy and well-being of our human books. Conversations take place in a controlled environment, and we provide guidelines to ensure respectful interactions. Human books have the option to limit the level of personal information shared during sessions. </p>                

                  <p class="mb-2 font-bold">
                  10. How can I support the Human Library?
                  </p>
                  <p class="text-neutral-500 dark:text-neutral-300">
                  You can support the Human Library by becoming a human book, participating as a reader, or spreading the word about our platform. Your involvement contributes to fostering understanding, breaking down barriers, and building a more connected society. </p>                
                </div>
                <div class="w-full shrink-0 grow-0 basis-auto md:w-5/12 md:px-3 lg:px-6">
                  {/* <p class="font-bold">
                    Didn't find your answer in the FAQ? Contact our sales
                  </p> */}
                  {/* <form>
                    <div class="relative mb-6" data-te-input-wrapper-init>
                      <input type="text"
                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleInput90" placeholder="Name" />
                      <label
                        class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        for="exampleInput90">Name
                      </label>
                    </div>
                    <div class="relative mb-6" data-te-input-wrapper-init>
                      <input type="email"
                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleInput91" placeholder="Email address" />
                      <label
                        class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        for="exampleInput91">Email address
                      </label>
                    </div>
                    <div class="relative mb-6" data-te-input-wrapper-init>
                      <textarea
                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlTextarea1" rows="3" placeholder="Your message"></textarea>
                      <label for="exampleFormControlTextarea1"
                        class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Message</label>
                    </div>
                    <div class="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
                      <input
                        class="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                        type="checkbox" value="" id="exampleCheck96" checked />
                      <label class="inline-block pl-[0.15rem] hover:cursor-pointer" for="exampleCheck96">
                        Send me a copy of this message
                      </label>
                    </div>
                    <button type="button" data-te-ripple-init data-te-ripple-color="dark"
                      class="mb-6 inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                      Send
                    </button>

                  </form> */}
              <div className="p-1 mx-auto ">
                <img 
                src={contactUs}
                alt="contactUs"/>
              </div>
              <div className="max-w-md mx-auto p-5 bg-white rounded-md shadow-md">
                    <h2 className="text-2xl font-semibold mb-1">Contact Us</h2>
                    <form>
                      <div className="mb-2">
                        <label htmlFor="name" className="block font-medium text-gray-600 mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full border rounded-md px-3 py-2 focus:ring focus:ring-blue-300"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div className="mb-2">
                        <label htmlFor="email" className="block font-medium text-gray-600 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full border rounded-md px-3 py-2 focus:ring focus:ring-blue-300"
                          placeholder="Enter your email address"
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="message" className="block font-medium text-gray-600 mb-1">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows="4"
                          className="w-full border rounded-md px-3 py-2 focus:ring focus:ring-blue-300"
                          placeholder="Enter your message"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-blue-500 text-white rounded-md py-2 font-medium hover:bg-blue-600 transition duration-300 transform hover:translate-y-0.5"
                      >
                        Send
                      </button>
                    </form>
                  </div>

                </div>
              </div>
            </section>
          </div>
        </>
    );
}

export default Contact