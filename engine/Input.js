class Input{
    static keysDown = []

    static mousePosition


    static keyDown(event){
        Input.keysDown.push(event.code)
    }

    static keyUp(event){
        Input.keysDown = Input.keysDown.filter(
            function(element){
                if(element!=event.code) 
                    return true
                else
                    return false
            })
    }

    static mouseMove(event){
        Input.mousePosition = new Vector2(event.clientX, event.clientY)
    }

}