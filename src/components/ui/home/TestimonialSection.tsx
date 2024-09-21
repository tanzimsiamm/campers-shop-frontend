
const testimonials = [
  {
    name: "John Doe",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6XqYA4LrfbuBuk9PuDTpY-xyuC5xw1HgLww&s",
    feedback:
      "This product has completely transformed my outdoor experiences. Highly recommend!",
  },
  {
    name: "Jane Smith",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnoPN8K0ROp9fSFAthzNm1c77VKBe5T22jtg&s",
    feedback:
      "The quality is unmatched! Perfect for all my camping trips. Will buy again.",
  },
  {
    name: "Alex Johnson",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxGcZoh8oFxxLODywTUCwVy4aaHSzflR13VA&s",
    feedback:
      "Amazing customer service and top-notch products. 10/10 experience!",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 object-cover rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {testimonial.name}
              </h3>
              <p className="text-gray-600 text-center">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
