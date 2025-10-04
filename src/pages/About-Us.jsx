import image3 from "../assets/images/about-bg.jpg";
import img1 from "../assets/images/values.png";
import img2 from "../assets/images/mission.png";
import img3 from "../assets/images/vision.png";

function About() {
  return (
    <div>
      <div>
        <img
          className="w-500 h-100 "
          src={image3}
          alt="About "
        />
      </div>
      <div className="flex items-center justify-center font-bold text-4xl mt-10">
        <h1>Who We Are</h1>
      </div>
      <div className="container mx-auto  text-2xl">
        <div>
          <p className="mt-3">
            Clozzet, Kenya's no. 1 online retailer was established in May 2013
            with the aim and vision to become the one-stop shop for retail in
            Kenya with implementation of best practices both online and offline.
            Clozzet is the largest online retail store in Kenya. At inception we
            did an average delivery time of a week, today we do, on average,
            delivery in 1-5 days.
          </p>
          <p className="mt-4">
            Initially starting with 3 employees, Clozzet presently has a staff
            strength of 1000 young and entrepreneurial Kenyans including our 150
            man strong customer service team available 7 days a week. We do
            country-wide delivery. Clozzet set-up the 1st e-commerce academy in
            Kenya, the Clozzet Academy, building young entrepreneurs pioneering
            various aspects of businesses.
          </p>
          <p className="mt-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
          </p>
        </div>
        <div className="conainer flex gap-25 mt-14">
          <div className="w-110 h-110 border-2 border-gray-200">
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center mt-6 rounded-full bg-green-300 w-35 h-35">
                <img
                  className="flex col-auto justify-center items-center"
                  src={img2}
                  alt="sign "
                />
              </div>
            </div>
            <div className="flex items-center justify-center  text-4xl mt-8">
              <h2>Missio</h2>
            </div>
            <div>
              <p className="ml-3">
                To innovate, to lead, to enhance, to provide best-value products
                and services to global customers and enhance the quality of life
                for our customers and employees.
              </p>
            </div>
          </div>

          <div className="w-110 h-110 border-2 border-gray-200">
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center mt-6 rounded-full bg-green-300 w-35 h-35">
                <img
                  className="flex col-auto justify-center items-center"
                  src={img3}
                  alt="sign "
                />
              </div>
            </div>
            <div className="flex items-center justify-center  text-4xl mt-8">
              <h2>Vision</h2>
            </div>
            <div>
              <p className="ml-2">
                To be a global leader in fashion- knit & fashion outerwear by
                empowering innovation and design to provide total customer
                satisfaction.
              </p>
            </div>
          </div>
          <div className="w-110 h-110 border-2 border-gray-200">
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center mt-6 rounded-full bg-green-300 w-35 h-35">
                <img
                  className="flex col-auto justify-center items-center"
                  src={img1}
                  alt="sign "
                />
              </div>
            </div>
            <div className="flex items-center justify-center  text-4xl mt-8">
              <h2>Core Values</h2>
            </div>
            <div className="flex items-center justify-center">
              <ul>
                <li>Passion</li>
                <li>Perfomance</li>
                <li>Simplicity</li>
                <li> Togetherness</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center font-bold text-4xl mt-10">
          <h1>Our History</h1>
        </div>
        <div className="container mx-auto text-2xl">
          <p>
            In the year 2013, Cozzet became a part of the apparel manufacturing
            industry of India. In term of over a decade, our company has
            developed rapidly and at the current moment employs more than 1000
            employees at our factory sites.CLOZZET is an integrated apparel
            manufacturer with the comprehensive capability to design and
            manufacture readymade garments with high quality for the Global
            Market, with a very competitive price.
          </p>
          <p className="mt-4">
            Our company can produce various kinds of garment, in various styles,
            across three categories which includes – flat-knit sweaters,
            outerwear jackets and circular knit t-shirts, sweatshirts & joggers,
            among which are, apparels for Men, Women , Kids and Babywear with a
            total capacity that reaches 12,00,000 , 2,50,000 & 10,00,000 pieces
            respectively, per annum. In producing high quality products, our
            company is supported by sophisticated technology and framework,
            which is helped by manpower and a capable and appressed team of
            experts who have helped us gain a local dominance over our field of
            expertise.
          </p>
          <p>
            We slowly built our reputation & started getting more business.
            Various international brands vested their design and outsourcing
            requirements and have received satisfactory creative and
            economically viable results.
          </p>
          <p>
            Starting with such a small production order from Levi’s now Clozzet
            Clothing Co. Limited. has grown rapidly and has been catering to the
            global leading apparel brands and growing its network all across the
            world.
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
