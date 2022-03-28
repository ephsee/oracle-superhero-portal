

function GadgetCard({hero, gadgets, handleGadgets}) {

    function deleteGadget(id){
        console.log(id)
        fetch(`/gadgets/${id}`,{
            method: 'DELETE'})
            .then(r=>r.json())
            .then(console.log)
            // .then(handleGadgets(...gadgets))
            alert('item removed')
    }

    const gadget = gadgets.filter( g => g.hero_id === hero.id).map( gad => <div key={gad.id}>{gad.item_name} ~ {gad.quantity} <button onClick={(e) => deleteGadget(gad.id)}>x</button></div> )

    return (

        <div>
                {gadget}
        </div>

    )
}

export default GadgetCard