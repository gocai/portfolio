import React from "react";
import './portfoliotab.css';
import abrakajumpa from '../../assets/abraicon.png';
import goblinpunch from '../../assets/goblin.png';

const Portfoliotab = () => {
  return (
    <section className="works">
        <h2 className="workstitle">My Portfolio</h2>
        <span className="worksdescription">Here is my portfolio of projects done during school and in my own time!</span>

        <div className="workspanel">
            <img src={abrakajumpa} alt="" className="worksimg" />
            <h2 className="workspanelheader">
            <a href="https://store.steampowered.com/app/2998050/Abrakajumpa/" target="_blank" rel="noreferrer">Abrakajumpa</a>
            </h2>
            <p className="workspaneldesc">
                A challenging 2D vertical platformer made in Unity, published on Steam.
            </p>
        </div>

        <div className="workspanel">
            <img src={goblinpunch} alt="" className="worksimgGoblin" />
            <h2 className="workspanelheader">
                <a href="https://gocai.github.io/GoblinPunch/"target="_blank" rel="noreferrer">GOBLIN FIGHT</a>
            </h2>
            <p className="workspaneldesc">
                Punch goblins in an HTML based web game. One touch controls.
            </p>
        </div>

        <div className="workspanel">
            <img src="" alt="" className="worksimg" />
            <h2 className="workspanelheader">
                
            </h2>
            <p className="workspaneldesc">
                
            </p>
        </div>
    </section>
  )
}

export default Portfoliotab