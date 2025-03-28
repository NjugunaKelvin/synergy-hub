import React from "react";

interface LanguageData {
  name: string;
  percentage: number;
  color: string;
}

const languages: LanguageData[] = [
  { name: "JavaScript", percentage: 45, color: "#f1c40f" },
  { name: "Python", percentage: 30, color: "#3498db" },
  { name: "TypeScript", percentage: 15, color: "#8e44ad" },
  { name: "Dart", percentage: 10, color: "#1abc9c" },
];

const LanguageUsage: React.FC = () => {
  return (
    <div className="p-3 bg-dark rounded">
      {languages.map((lang, index) => (
        <div key={index} className="mb-2">
          <div className="d-flex justify-content-between">
            <span className="text-white">{lang.name}</span>
            <span>{lang.percentage}%</span>
          </div>
          <div className="progress">
            <div
              className="progress-bar"
              style={{
                width: `${lang.percentage}%`,
                backgroundColor: lang.color,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LanguageUsage;
