import { useDrop } from 'react-dnd';
import { ItemTypes } from './Constants';
const style = {
    height: '12rem',
    width: '12rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left',
};

var Person = ({display, base, dress}) => {
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.DRESS,
        drop: () => ({ name: 'Person' }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }));

    return (
    <div ref={drop} role={'Person'} style={{position: 'relative'}}>
    <img src={(dress === 0 ? "./base_" : "./base_nude_") + base + ".png"} className="App-logo" alt="base"  width={280} draggable="false"  />
    <img src={"dress_" + base + "_" + dress + ".png"} className="App-logo" alt=""  width={280} draggable="false"  style={{position: 'absolute', left: 0, top: 0, display: display}}/>
    <img src={"./hair_" + base + ".png"} className="App-logo" alt="base"  width={280} draggable="false"  style={{position: 'absolute', left: 0, top: 0}}/>
    </div>);
};


export default Person;