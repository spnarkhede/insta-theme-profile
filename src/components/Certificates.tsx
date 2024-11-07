import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const certificates = [
  {
    title: 'AWS Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'Dec 2023',
    image: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?w=800&h=600&fit=crop',
    link: 'https://aws.amazon.com/certification'
  },
  {
    title: 'Google Cloud Professional',
    issuer: 'Google Cloud',
    date: 'Oct 2023',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
    link: 'https://cloud.google.com/certification'
  },
  {
    title: 'React Advanced Concepts',
    issuer: 'Frontend Masters',
    date: 'Aug 2023',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
    link: 'https://frontendmasters.com'
  }
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Award className="w-5 h-5 text-gray-600" />
          Certificates
        </h2>
        <div className="grid gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden hover:bg-gray-100 transition-colors"
            >
              <div className="md:flex">
                <div className="md:w-48 h-48 md:h-auto">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{cert.title}</h3>
                    <p className="text-gray-600 mb-2">Issued by {cert.issuer}</p>
                    <p className="text-sm text-gray-500">{cert.date}</p>
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-pink-600 hover:text-pink-700 transition-colors mt-4"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}