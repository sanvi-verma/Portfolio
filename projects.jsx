import React from 'react'
import Card from './Card';
import bank from"./images/bank.jpg"
import Hospital from"./images/Hospital.jpg"
import toDoList from "./images/to-doList.jpg"
import globe from"./images/globe.jpg"
import { motion } from 'framer-motion';

const Projects = () => {
    const cards = [
        {
          imageUrl: bank,
          altText: 'Bank Management',
          title: 'Bank Management',
          description: 'Developed a C++ Bank Management System for handling accounts, transactions, and customer data.',
          explore:"https://github.com/sanvi-verma/BankManagement"
        },
        {
          imageUrl:Hospital,
          altText: 'Hospital Management System',
          title: 'Hospital Management System',
          description: '"Engineered a C++-based Hospital Management System for efficient patient record management, appointment scheduling, and data export functionality."',
          explore:"https://github.com/sanvi-verma/Hospital-Management-System"

        },
        {
          imageUrl: globe,
          altText: 'World Capital Quiz',
          title: 'World Capital Quiz',
          description: "Created an interactive world capital quiz game using JavaScript, EJS, Express.js, and PostgreSQL",
          explore:"https://github.com/sanvi-verma/World_Capital_Quiz"
        },
        {
            imageUrl: toDoList,
            altText: 'To-Do List',
            title: 'To-Do List',
            description: "Developed a dynamic to-do list application using React.js, enabling task management and real-time updates.",
            explore:"https://github.com/sanvi-verma/To-DoList"
          }
      ];

  return (
    <motion.div
    initial={{
     opacity:0,
     y:40
    }} 
    whileInView={
     {
       opacity:1,
       y:0
     }
    }
    
    transition={{
     delay:0.2,
     duration:0.5
    }}
    viewport={{
        margin:"-100px",
      once:true
     }} className="up_gap " id="project">
        <h2 className='heading1 down_gap'>Projects</h2>
        <div className="completely">
        
    <div className="grid" >
        
      {cards.map((card, index) => (
        
        <Card
          key={index}
          imageUrl={card.imageUrl}
          altText={card.altText}
          title={card.title}
          description={card.description}
          explore={card.explore}
        />
      ))}
    </div>
    </div>
    </motion.div>
  )
}

export default Projects
