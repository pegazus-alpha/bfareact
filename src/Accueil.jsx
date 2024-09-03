/*
 * @Author: pegazus-alpha pourdebutantp@gmail.com
 * @Date: 2024-07-23 09:05:02
 * @LastEditors: pegazus-alpha pourdebutantp@gmail.com
 * @LastEditTime: 2024-07-23 12:47:31
 * @FilePath: \react\src\accueil.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


// function HomePage() {
//   const [showNotification, setShowNotification] = useState(false);

//   return (
//     <div className="home-page">
//       <h1>Bienvenue sur notre site!</h1>
//       <p> 
//         </p>

//       <Link to="/about">
//         <button className="about-button">Créez votre TodoLst</button>
//       </Link>

//       { Notification (optionnel)}
//       {showNotification && (
//         <div className="notification">
//           <p>Vous avez cliqué sur le bouton!</p>
//           <button onClick={() => setShowNotification(false)}>Fermer</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default HomePage;
function HomePage() {
  const navigate = useNavigate();

  const navigateToAbout = () => {
    navigate('/Tasks');
  };
  return (
    <div className="HomePage">
      <header className="HomePage-header">
        <h1>Bienvenue sur TodoList !</h1>
        <p>Organisez vos tâches et gagnez en productivité.</p>
        <img src="https://picsum.photos/200/300?image=1005" alt="Image TodoList" />
      </header>

      <div className="HomePage-content">
        <p>Créez des listes de tâches, définissez des priorités et des dates d'échéance, et suivez votre progression pour atteindre vos objectifs.</p>
      </div>

      <div className="HomePage-action">
        <button onClick={navigateToAbout} className="btn btn-primary">Créer votre TodoList</button>
      </div>
    </div>
  );
}

export default HomePage;
























