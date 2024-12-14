export default class Flask_Services {

    static direction:string = "https://inm.pythonanywhere.com/";

    static async lotteryService(participants:string[]): Promise<any>{
        
        var choosedWinnerIndex = -1;
        try{
            const response = await fetch(this.direction + "lottery",{
                method: "POST",
                body: JSON.stringify({
                    participants: participants
                }),
                headers: {
                    'content-type': 'application/json'
                }
            });
            const choosedWinner = await response.json();
            choosedWinnerIndex = choosedWinner.winner;
        }
        catch(error){
            console.log(error);
        }
        finally{
            return choosedWinnerIndex;
        }
    }

    static async geminiService(message:string): Promise<any>{
        
        var answer = "";
        try{
            const response = await fetch(this.direction + "gemini",{
                method: "POST",
                body: JSON.stringify({
                    message: message
                }),
                headers: {
                    'content-type': 'application/json'
                }
            });
            const gemini = await response.json();
            answer = gemini.response;
        }
        catch(error){
            console.log(error);
        }
        finally{
            return answer;
        }
    }
}