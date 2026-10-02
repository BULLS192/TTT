export default function SatelliteTileLayer({variant='tracking'}){
  const x0=variant==='security'?1924:1924;
  const y0=variant==='security'?3385:3385;
  const tiles=[];
  for(let row=0;row<3;row++){
    for(let col=0;col<4;col++){
      const x=x0+col,y=y0+row;
      tiles.push({x,y,src:`https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/13/${y}/${x}`});
    }
  }
  return <div className="ttt-sat" aria-hidden="true">
    <div className="ttt-sat__tiles">{tiles.map(t=><img key={t.x+'-'+t.y} src={t.src} alt="" draggable="false" loading="eager" referrerPolicy="no-referrer"/>)}</div>
    <div className="ttt-sat__grade"/>
    <div className="ttt-sat__noise"/>
    <span className="ttt-sat__credit">Imagery © Esri</span>
  </div>;
}
