import Text from "../../components/Atomic/Text";
import { features } from "../../constants/Constant";

const Banner = () => {
  return (
    <section className="py-20 bg-[#3d3d3d] text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-accent mb-10 underline">
        Features for better experience
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-12xl mx-auto px-6 text-secondary">
        {features.map((item: any, index: any) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-3"
          >
            <div
              className={`flex items-center justify-center w-12 h-12 rounded-full ${item.bg}`}
            >
              {item.icon}
            </div>
            <Text
              content={item.title}
              size="1.125rem"
              weight="600"
              className="text-secondary"
              lineHeight="1.4"
            />

            <Text
              content={item.desc}
              size="0.9rem"
              className="text-secondary leading-relaxed max-w-xs"
              lineHeight="1.6"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner;
