import { Link } from "react-router-dom";
import Text from "../../components/Atomic/Text";
import { About_US } from "../../constants/Constant";

const AboutUs = () => {
  const { companyName, tagline, description, ctaText, cards } = About_US;
  return (
    <>
      <div className="layout">
        <section className="w-full bg-primary py-16 md:py-24 px-6 md:px-12 flex items-center justify-center">
          <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 bg-accent/10 px-3 py-1 rounded-full w-max">
                <Text
                  content={`${companyName} • About`}
                  className="text-sm font-semibold text-accent"
                  size="0.9rem"
                />
              </div>

              <Text
                content={
                  <>
                    {tagline}
                    <br />
                    <span className="text-accent font-bold">{companyName}</span>
                  </>
                }
                className="text-2xl sm:text-3xl md:text-4xl font-semibold text-secondary"
                lineHeight="1.15"
              />

              <Text
                content={description}
                className="text-secondary  max-w-2xl"
                lineHeight="1.7"
                size="1rem"
              />

              <div className="flex items-center gap-4">
                <Link
                  to={""}
                  className="bg-accent text-white px-5 py-2 rounded-md font-medium shadow-sm hover:bg-accent/80 transition"
                >
                  {ctaText}
                </Link>

                <Link
                  to={""}
                  className="border border-accent text-white px-5 py-2 rounded-md font-medium shadow-sm hover:bg-accent/80 transition"
                >
                  Contact us
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-6 items-center md:items-end">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className={`w-full max-w-sm p-6 rounded-2xl ${card.bg} border border-gray-100 shadow-sm`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <Text
                        content={card.title}
                        className="text-sm text-gray-500"
                        size="0.9rem"
                      />
                      <Text
                        content={card.subtitle}
                        className="text-lg font-semibold text-primary mt-1"
                        size="1.125rem"
                      />
                    </div>
                    <div className="p-3 rounded-full bg-accent/20">
                      {card.icon}
                    </div>
                  </div>

                  <Text
                    content={card.description}
                    className="text-primary  mt-4"
                    size="0.95rem"
                    lineHeight="1.5"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
