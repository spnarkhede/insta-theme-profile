import { useState } from 'react';
import { Award, ExternalLink, X } from 'lucide-react';
import type { Certificate } from '../types';

const certificates: Certificate[] = [
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
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

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
              onClick={() => setSelectedCert(cert)}
              className="bg-gray-50 rounded-xl overflow-hidden hover:bg-gray-100 transition-colors cursor-pointer"
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
                  <button
                    className="flex items-center gap-2 text-pink-600 hover:text-pink-700 transition-colors mt-4"
                  >
                    <span>View Details</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="font-semibold">{selectedCert.title}</h3>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-1 hover:bg-gray-100 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm text-gray-500">Issuing Organization</h4>
                  <p className="font-medium">{selectedCert.issuer}</p>
                </div>
                <div>
                  <h4 className="text-sm text-gray-500">Issue Date</h4>
                  <p className="font-medium">{selectedCert.date}</p>
                </div>
                <a
                  href={selectedCert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}