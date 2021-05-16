import React from 'react'
import { ItemTypes } from './Constants'
import { useDrag } from 'react-dnd'

var Dress = function ({ update, ind, base }) {
    var [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.DRESS,
        item: { ind },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (item && dropResult) {
                update(ind);
                //alert(`You dropped ${item.image} into ${dropResult.name}!`);
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }));
    //const opacity = isDragging ? 0.4 : 1;
    return (<div ref={drag} role="Dress" >
			<img src={"dress_"+ base + "_" + ind + ".png"} className="App-logo" alt="base"  width={280} draggable="false"/>
		</div>);
};

export default Dress