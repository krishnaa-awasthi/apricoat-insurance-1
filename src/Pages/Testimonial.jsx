import React, { useContext, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { TestimonialsProvider } from '../Context/TestimonialContext';

const StarRating = ({ rating }) => (
  <div className="flex text-yellow-400 mb-2">
    {[...Array(5)].map((_, i) => (
      <FaStar key={i} className={i < rating ? 'fill-current' : 'text-gray-300'} />
    ))}
  </div>
);

const Testimonials = ({refProp}) => {
  const { testimonials, addTestimonial } = useContext(TestimonialsProvider);

  const [formData, setFormData] = useState({
    name: '',
    role: '',
    message: '',
    rating: 5,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTestimonial(formData);
    setFormData({ name: '', role: '', message: '', rating: 5 });
  };

  return (
    <section ref={refProp} className="bg-white py-16 px-6 md:px-20 text-center">
      <h2 className="text-4xl font-bold text-blue-900 mb-4">What Our Clients Say</h2>
      <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
        Hear from the businesses and professionals who trust Apricoat Insurance.
      </p>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mb-16">
        {testimonials.slice(0, 4).map((t, i) => (
          <div
            key={i}
            className="bg-gray-50 rounded-xl p-6 shadow-sm text-left hover:shadow-md transition"
          >
            <StarRating rating={t.rating} />
            <p className="text-gray-700 italic mb-4">"{t.message}"</p>
            <h4 className="font-semibold text-blue-900">{t.name}</h4>
            <span className="text-sm text-gray-500">{t.role}</span>
          </div>
        ))}
      </div>

      {/* Add Review Form */}
      <div className="max-w-xl mx-auto text-left bg-blue-50 p-8 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-blue-800 mb-4">Add Your Review</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
          <input
            name="role"
            placeholder="Your Role / Company"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            rows="3"
            required
          />
          <div>
            <label className="block mb-1 font-medium">Rating:</label>
            <select
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="px-4 py-2 border rounded-md"
            >
              {[5, 4, 3, 2, 1].map((star) => (
                <option key={star} value={star}>
                  {star} Star{star > 1 && 's'}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-800 text-white px-6 py-2 rounded-md hover:bg-blue-900"
          >
            Submit Review
          </button>
        </form>
      </div>
    </section>
  );
};

export default Testimonials;
