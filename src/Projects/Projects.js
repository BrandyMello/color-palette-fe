import React from 'react';
import './Projects.css';
import { updateProject, updatePalette } from '../apiCalls/apiCalls';

const handlePaletteNameChange = (e, oldPalette) => {
  const newPalette = {...oldPalette, name: e.target.innerText} 
  updatePalette(newPalette)
}

const handleProjectNameChange = (e, props) => {
  const newProject = {id: props.id, name: newProjectName}
  updateProject(newProject)
}
const Projects = (props) => {
  let projectPalettes = props.palettes.filter(palette => {
    if(palette.projectName === props.name) {
      return palette
    }
  });
  let paletteRow = projectPalettes.map((projPalette, index) => {
    console.log("props in projects", props)
   return (
     <>
     <tr>
    {/* <button type="submit" onclick={props.deleteSpecificProject(props.id)}>Delete Project</button> */}
         <th contentEditable={true} onKeyUpCapture={(e) => handlePaletteNameChange(e, projPalette)}>{projPalette.name}</th>
     </tr>
   <tr key={projPalette.id}>
     <td key={index} style={{ backgroundColor: projPalette.colorOne }}>lock</td>
     <td key={index} style={{ backgroundColor: projPalette.colorTwo }}>lock</td>
     <td key={index} style={{ backgroundColor: projPalette.colorThree }}>lock</td>
     <td key={index} style={{ backgroundColor: projPalette.colorFour }}>lock</td>
     <td key={index} style={{ backgroundColor: projPalette.colorFive }}>lock</td>
     <button type="submit" onClick={() => props.deleteSpecificPalette(props.palettes[index].id)}>Delete Palette</button>
    </tr>
    </>
   )
  })
  return (
    <div>
      <h2 contentEditable={true} onKeyUpCapture={(e) => handleProjectNameChange(e, props)}>{props.name}</h2>
      <table>
        {paletteRow}
      </table>
    </div>
  )
}

export default Projects