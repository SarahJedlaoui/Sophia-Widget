import Image from "next/image";

function CustomerStories() {
  return (
    <section>
      <div className="2xl:py-20 py-11">
        <div className="container">
          <div className="flex flex-col justify-center items-left gap-10 md:gap-20">
            <div className="text-left">
              <h2>What are other patients asking?</h2>
              <p className="mt-5 text-dark_black/60 dark:text-white/60">
                See common questions people ask Sophia. Click to get trusted
                answers from your clinic’s team.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col xl:flex xl:flex-row gap-6">
                <div className="p-8 gap-64 rounded-2xl flex flex-col relative bg-dark_black dark:bg-white object-cover bg-center h-full w-full bg-cover bg-no-repeat">
                  <span className="text-white/60 uppercase text-sm font-medium">
                    Patients questions
                  </span>
                  <div className="flex flex-col gap-6 ">
                    <h2 className="text-white">
                      “Is my medication safe with other treatments?”
                    </h2>
                    <div className="flex flex-col gap-1">
                      <p className="text-white font-medium">See Answer</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-36 xl:max-w-25 bg-pale-yellow rounded-2xl p-8">
                  <div>
                    <span className="uppercase text-sm font-medium text-dark_black/60">
                      Patients questions
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-7xl font-medium dark:text-dark_black">
                      50 asked
                    </h2>
                    <h4 className="dark:text-dark_black">
                      How do I manage pain after surgery?
                    </h4>
                  </div>
                </div>
              </div>
              <div className="flex flex-col xl:flex xl:flex-row gap-6">
                <div className="flex flex-col justify-between bg-dark_black xl:max-w-25 dark:bg-white/10 rounded-2xl p-8">
                  <div className="flex flex-col gap-6">
                    <span className="text-white/60 uppercase text-sm font-medium">
                      Patients questions
                    </span>
                    <h2 className="text-white">
                      What are the signs of infection surgery?
                    </h2>
                  </div>
                </div>

               
               
                <div className="flex flex-col gap-24 justify-between bg-dark_black/5 dark:bg-white/5 p-8 rounded-2xl">
                  <div className="flex flex-col gap-6">
                    <span className="text-dark_black/60 dark:text-white/60 uppercase text-sm font-medium">
                      Patients questions
                    </span>
                    <h2 className="text-2xl lg:text-5xl">
                      “How do I care for my wound at home?”
                    </h2>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-medium">See Answer</p>
                  </div>
                </div>

                <div className="flex flex-col justify-between bg-dark_black xl:max-w-25 dark:bg-white/10 rounded-2xl p-8">
                  <div className="flex flex-col gap-6">
                    <span className="text-white/60 uppercase text-sm font-medium">
                      Patients questions
                    </span>
                    <h2 className="text-white">
                      What are the signs of infection surgery?
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomerStories;
