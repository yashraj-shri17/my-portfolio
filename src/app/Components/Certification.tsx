import Link from "next/link";
import { FaExternalLinkAlt, FaCertificate } from "react-icons/fa";

interface Certification {
  id: string;
  title: string;
  organization: string;
  link?: string;
  date: string;
  notes: string;
}

interface CertificationProps {
  certifications: Certification[];
  className?: string;
}

const Certification = ({
  certifications = [],
  className = "",
}: CertificationProps) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="bg-primary rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 tracking-tighter"
          >
            <div className="p-5">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-secondary p-3 rounded-lg">
                    <FaCertificate className="h-6 w-6 text-white" />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-2xl font-bold text-secondary mb-4 sm:pr-10 leading-tight">
                    {cert.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-white">
                      {cert.organization}
                    </span>

                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-white">
                      {cert.date}
                    </span>
                  </div>

                  {cert.notes && (
                    <p className="text-sm text-secondary mb-3">{cert.notes}</p>
                  )}

                  {cert.link && (
                    <Link
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-secondary hover:underline font-medium text-sm"
                    >
                      View Certificate
                      <FaExternalLinkAlt className="ml-1 h-3 w-3" />
                    </Link>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-secondary/50 px-5 py-3 border-t border-secondary ">
              <div className="flex items-center justify-between text-xs sm:text-sm text-white">
                Verified Credential
                <div className="flex space-x-1">
                  <div className="h-2 w-2 rounded-full bg-green-500 mt-1 sm:mt-1.5 mr-1"></div>
                  Valid
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certification;
