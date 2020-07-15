const xclass='x'
const cclass='circle'
let turn=false
const w=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
] 
const r=document.getElementById('res')
    const board=document.getElementById('board')
const cel=document.querySelectorAll('[data-cell]')
const wt=document.querySelector('[data-winning]')
const pp=document.getElementById('wini')

start()
r.addEventListener('click',start)
function start()
{ 
cel.forEach( cell =>
    {    cell.classList.remove(cclass)
        cell.classList.remove(xclass)
        cell.removeEventListener('click',handclick)
        cell.addEventListener('click',handclick,{once: true})
    })
h()
pp.classList.remove('show')

}

    function handclick(e)
    {
      //place mark
      //check draw
      // check win
      //swap
      const cell=e.target
     const cur= turn? cclass: xclass
     mark(cell,cur)
     if(checkwin(cur))
     {
         endgame(false)

     }
     else if(isdraw())
     {
         endgame(true)
     }else {

     swap()
     h()}
    }

    function isdraw()
    {
        return [...cel].every(cell=>
            {
                return cell.classList.contains(xclass)||cell.classList.contains(cclass)
            })
    }

    function mark(cell,cur)
    {
        cell.classList.add(cur)
    }
    function swap()
    {
        turn=!turn
    }

    function h()
    {
        board.classList.remove(xclass)
        board.classList.remove(cclass)
        if(turn)
        {
            board.classList.add(cclass)

        }
        else{
            board.classList.add(xclass)
        }
    }
    function checkwin(cur)
    { 
       return w.some(co =>
            {
                return co.every(index =>
                    {
                      return cel[index].classList.contains(cur)
                    })
            })

    }
    function endgame(draw)
    {
        if(draw)
        {
           wt.innerText='Draw!'
        }
        else
        {
            wt.innerText=`${turn? "O's" : "X's"} Wins!`

        }
        pp.classList.add('show')
    }