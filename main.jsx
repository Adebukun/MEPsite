import React from 'react';
import { createRoot } from 'react-dom/client';
import { LayoutDashboard, ClipboardList, AlertTriangle, FileText, Plus, ChevronRight } from 'lucide-react';
import './styles.css';

const projects=[
 {name:'Lekki Commercial Tower',client:'Apex Developments',progress:72,status:'On track',issues:3},
 {name:'Victoria Island Residence',client:'Northpoint Properties',progress:48,status:'At risk',issues:7},
 {name:'Ikeja Business Park',client:'PrimeBuild Ltd',progress:61,status:'On track',issues:2},
 {name:'Yaba Mixed-Use Complex',client:'UrbanCore',progress:34,status:'Delayed',issues:9}
];

function App(){return <div className="app"><aside><div className="brand"><span>SP</span><div>SitePulse<small>MEP PROJECTS</small></div></div><nav><a className="active"><LayoutDashboard/>Overview</a><a><ClipboardList/>Site visits</a><a><AlertTriangle/>Issues</a><a><FileText/>Reports</a></nav><div className="profile"><b>Project Manager</b><small>Operations</small></div></aside><main><header><div><p className="eyebrow">PORTFOLIO</p><h1>Project overview</h1><p className="muted">Monitor site progress across your MEP projects.</p></div><button><Plus size={18}/> New site visit</button></header><section className="metrics"><Metric label="Active projects" value="12"/><Metric label="Average progress" value="63%"/><Metric label="Open issues" value="21"/><Metric label="Reports due" value="4"/></section><section className="content"><div className="panel"><div className="panelhead"><div><h2>Projects</h2><p>Latest project health</p></div><span className="link">View all <ChevronRight size={15}/></span></div>{projects.map(p=><div className="project" key={p.name}><div className="projectmain"><div className="dot"></div><div><b>{p.name}</b><small>{p.client}</small></div></div><div className="progress"><div><span style={{width:p.progress+'%'}}></span></div><b>{p.progress}%</b></div><span className={'status '+p.status.toLowerCase().replace(' ','-')}>{p.status}</span><span className="issues">{p.issues} issues</span></div>)}</div><div className="panel quick"><h2>Today's activity</h2><p>Site teams have submitted <b>8</b> updates across <b>6</b> projects.</p><div className="activity"><span>08</span><div><b>Site visits completed</b><small>HVAC · Plumbing · Firefighting</small></div></div><div className="activity"><span>05</span><div><b>Issues raised</b><small>2 critical · 3 routine</small></div></div><div className="activity"><span>06</span><div><b>Reports ready</b><small>Awaiting PM review</small></div></div><button className="secondary">Review updates <ChevronRight size={16}/></button></div></section></main></div>}
function Metric({label,value}){return <div className="metric"><small>{label}</small><strong>{value}</strong></div>}

createRoot(document.getElementById('root')).render(<App/>);
