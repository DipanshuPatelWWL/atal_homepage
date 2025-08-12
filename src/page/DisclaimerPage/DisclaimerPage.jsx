import storeImg from "../../assets/disclaimer/store.png"
import img2 from "../../assets/category/eyecheck2.png"
import img3 from "../../assets/newcollection/sunglass.jpg"

export default function DisclaimerPage() {
    return (
        <main className="min-h-screen bg-gray-100 text-gray-900">
            <div className="p-10 mx-auto">
                <header className="mb-6 relative">
                    <img
                        src={storeImg}
                        alt="Eye Care Banner"
                        className="w-full h-48 object-cover rounded-xl border-4 border-red-600 shadow-lg"
                    />
                    <div className="absolute bottom-4 left-6 bg-black/70 p-4 rounded-xl text-white">
                        <h1 className="text-4xl font-extrabold tracking-tight">Disclaimer of Warranty</h1>
                        <p className="text-sm text-red-300">Atal Optical Corp — Information & site usage notice</p>
                    </div>
                </header>

                <article className="bg-white border border-gray-300 rounded-2xl p-6 shadow-lg flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/3 flex-shrink-0">
                        <img
                            src={img2}
                            alt="Optical Store"
                            className="rounded-xl shadow-lg border border-red-500 hover:grow
                            transition-transform duration-400 hover:scale-103 hover:shadow-lg
                            "
                        />
                        <img
                            src={img3}
                            alt="Eyewear Display"
                            className="rounded-xl shadow-lg border border-red-500 mt-4 h-[40vh] w-[100%] object-cover"
                        />
                    </div>

                    <section className="prose max-w-none text-sm leading-relaxed text-gray-800 lg:w-2/3">
                        <p>
                            The content ("Content") provided on this website by <strong>Atal Optical Corp</strong> ("we", "us", or "our") is
                            offered solely as a service to our customers. This Site does not encompass information about all eye diseases,
                            nor does it provide comprehensive medical information relevant to your individual eyecare needs.
                        </p>
                        <p>
                            The information contained herein is intended solely as general health information and is designed to facilitate
                            communication between you and your professional eyecare provider. This Site does not provide medical diagnoses for
                            any individual and must not be used as a substitute for professional medical advice, diagnosis, treatment, or care.
                        </p>
                        <p>
                            All specific medical questions regarding your personal medical condition, treatment, care, or diagnosis should be
                            directed to your licensed eyecare professional. You should never disregard or delay seeking professional medical
                            advice based on any information presented on or linked to this Site.
                        </p>
                        <p>
                            Except as expressly and unambiguously stated otherwise, Atal Optical Corp does not endorse, operate, control, or
                            assume responsibility for any product, brand, method, treatment, information, or service referenced on this Site.
                        </p>
                        <p>
                            All information, services, and products provided on this Site are offered "as is", without any warranty of any kind,
                            either express or implied. Atal Optical Corp, along with our medical advisors, consultants, and staff, hereby
                            expressly disclaim and exclude all warranties related to the information, services, and products on this Site,
                            including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.
                        </p>
                        <p>
                            This Site may contain Content provided by third parties or users. In such cases, Atal Optical Corp acts as a
                            distributor and not a publisher of such third-party Content, and therefore exercises no editorial control over it—
                            similar to the role of a public library or newsstand.
                        </p>
                        <p>
                            Any opinions, advice, statements, services, offers, or other information expressed or made available by third
                            parties (including merchants and licensors) are those of the respective authors or distributors, and not of Atal
                            Optical Corp or its affiliates, officers, directors, employees, or agents.
                        </p>
                        <p>
                            No warranties are made regarding the completeness, accuracy, currency, or reliability of the information published by
                            Atal Optical Corp. We do not warrant that the information, services, or products on this Site will meet your
                            requirements or are free from defects or errors.
                        </p>
                    </section>
                </article>

                <footer className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="text-sm text-gray-700">
                        <strong>Need help?</strong>
                        <div>Contact your licensed eyecare professional for any medical concerns.</div>
                    </div>
                </footer>
            </div>

            {/* Print-friendly tweaks */}
            <style jsx>{`
        @media print {
          body, html { background: #fff !important; color: #000 !important }
          .prose { color: #000 !important }
          .bg-white { background: transparent !important }
        }
      `}</style>
        </main>
    );
}