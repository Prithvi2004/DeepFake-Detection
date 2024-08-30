import React from "react";
import "./OurTeam.css";
import image1 from "../assets/image1.png"; // Replace with actual image path
import image2 from "../assets/image2.png"; // Replace with actual image path
import image3 from "../assets/image3.png"; // Replace with actual image path
import image4 from "../assets/image4.png"; // Replace with actual image path
import image5 from "../assets/image5.png"; // Replace with actual image path
import image6 from "../assets/image6.png"; // Replace with actual image path

function OurTeam() {
  const teamMembers = [
    { name: "Md Abdul Azeez", imgSrc: image1 },
    { name: "M Prithvi", imgSrc: image2 },
    { name: "K Chakri", imgSrc: image3 },
    { name: "M Sivarama Teja", imgSrc: image4 },
    { name: "John Doe", imgSrc: image5 },
    { name: "Jane Smith", imgSrc: image6 },
  ];

  return (
    <div className="our-team-section" data-aos="fade-up">
      <h2 className="team-heading">Our Team</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.imgSrc} alt={member.name} className="team-image" />
            <p className="team-name">{member.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurTeam;
