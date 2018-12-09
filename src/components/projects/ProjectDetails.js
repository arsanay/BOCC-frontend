import React from 'react'
const ProjectDetails = (props) => {
  console.log(props.location.tes)
  return(
   
    <div className="project-list section">
    <div className="container" >
            <div className="card z-depth-0 project-summary" >
              <div className="card-content grey-text text-darken-3">
        <div className="card-title"><p>{props.location.tes.project.title}</p> </div>
        <p>{props.location.tes.project.content}</p>
        <p>{props.location.tes.project.creator}</p>
        <p className="grey-text">Deadline : {props.location.tes.project.deadline}</p>
        <div class="ldBar" data-value="50" data-preset="energy"></div>
       </div>
    </div>
    </div>  
    </div>
  )
 
  
}

export default ProjectDetails











// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { getProject} from './../../store/actions/projectActions'
// class ProjectDetails extends Component{
//   state = {
//     projects: [
//       {id: '1', title: 'Manohara', content: 'Enrico Mantap',creator:'Mgr War Room'},
//       {id: '2', title: 'B O C C', content: 'Asa JOSS',creator:'Mgr War Room'},
//       {id: '3', title: 'DESHO', content: 'Ade TOP',creator:'Mgr War Room'}
//     ]
//   }
    
  
//   render(){
//     const { projects } = this.props;
//     return (
//     <React.Fragment>
//       {!projects
//        ? <p> Loading ...</p>
//          : projects.map(datum=>{
//           const {title, content, creator, deadline} =datum
//           return (
//             <div className="container section project-details">
//               <div className="card z-depth-0">
//                 <div className="card-content">
//                   <span className="card-title">{title} </span>
//                   <p> {content}</p>
//                 </div>
//                 <div className="card-action grey lighten-4 grey-text">
//                   <div>{creator}</div>
//                   <div>{deadline}</div>
//                 </div>
//               </div>
//             </div>
//           )
//          })
//          }  
//       </React.Fragment>
//     )
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     projects:state.getproject.projects
//   }
// }
// const mapDispatchToProps = (dispatch) =>{
//   return {
//     getProjects:(project) => dispatch(getProject(project))
//   }
// }

// export default connect (mapStateToProps,mapDispatchToProps)(ProjectDetails)


 //itu = datumbuat apa mas, line 19, kok 
  // lhoo bukan, jadi kan ada banyak card , trus di kliksalah 1 card nanti nge direct ke page isinya cuma 1 card tapi lebih detil
  // hoo ini nih single data? 
// projectsummmary mas, projectsummary di injek ke projectl  

  // nah kalau yang banyak datanya dimana?

  // holy moly, aku kira karena projectDetails jadi banyak
  // berarti ini seharusnya punya parent component to

//shit aku mau keluar sama yang lain dulu sorry bantuin nya setengah2

// saran ku, bikin backend yang ngambil data getProjectById(id)
// id nya parameter

// terus di project nanti ada tombol yang intinya gini
// <Link to={<nama_halaman/${id_dari_back_end_pas_map}>}>Menuju Detail</Link>
// nah nanti routenya kan kurang lebih gini
// <Route path="<nama_halaman/:id>" component={ProjectDetails}/>
// hmm kayaknya penggunaan react router dom mu itu masih salah, jadi kaya nimpa2
// terutama tadi ada 2 route dengan component yang sama
// dah dulu ya

// kira2 kalo km liat tadi nemu ga alasan knp loading barku ga muncul mas ?
// okelah mas nanti sambil2 aku pelajarin lagi yg penting tau hint nya
// yg mana itu?

//done ma
// dah itu
//gabisa mas, unexpected "," line 12
// ini bisa jalan gak?
// errornya apa?
//bisa jalan gak?
//bisa mas

//bisa jalan gak?

