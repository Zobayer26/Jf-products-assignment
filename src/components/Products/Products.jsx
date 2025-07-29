import PropTypes from 'prop-types';
import Button from '../Button';

const Products = ({ heading, data }) => {
    return (
        <section className="mt-[100px]">
            <h1 className="mb-7.5 font-Poppins font-medium text-[42px] leading-[100%] text-primary">
                {heading}
            </h1>
            <div className=" grid grid-cols-4 gap-5">
                {data.map((item) => (
                    <div key={item.id}
                        className=" bg-bgColor p-2.5 rounded-[17px]">
                        <div className=" flex items-center justify-center cursor-pointer">
                            <img
                                className=" bg-center bg-cover"
                                src={item.imageSrc}
                                alt={item.title}

                            />

                        </div>
                        <div>

                            <h1 className=" text-primary font-Poppins font-semibold text-[18px] leading-[140%] mt-5 ">
                                {item.title}
                            </h1>
                            <p className="text-primary font-Poppins font-medium text-[14px] leading-[140%] mt-2.5 mb-5 h-5">
                                {item.price}
                            </p>
                            <Button

                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Products
Products.propTypes = {
    heading: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired

}