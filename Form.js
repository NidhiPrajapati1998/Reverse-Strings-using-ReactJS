import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            para: '',
            word: '',
            op: '',
        }
    }

    handleparaChange = event => {
        this.setState({
            para: event.target.value
        })
    }

    handlewordChange = event => {     
        const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
           this.setState({word: event.target.value})
        }    
        else{
            alert(`pls enter only numbers!!!`);
        }
    }

    logic(str) 
    {
        var no = parseInt(this.state.word);
        str = str.split(".");
        var ans = "";
        
        for (var i = 0; i < str.length - 1; i++) 
        {
            var words = str[i].trim().split(" ");
            var result1 = "";
             
            if(words.length >= no)
            {
                for (var j = words.length - (no + 1); j >= 0; j--) 
                {
                    result1 += words[j] + " ";
                }
                result1 = result1.trim();
                for (var k = words.length - no; k <= words.length - 1; k++) 
                {
                    result1 += (" " + words[k]);
                }
                ans += result1 + ". ";
                }
            else
            {
                if(words.length >= 2 && words.length >= no)
                {
                    var sd = "";
                    for (var x = words.length -1; x >= 0; x--) 
                    {
                        sd += words[x] + " ";
                    }                   
                    ans += sd + ". ";
                }
                else
                {
                    ans +=str[i]+ ". ";
                }
             }
        }
        return ans;
    }

    btnclick() 
    {
        if(this.state.para.length == 0 || this.state.para == " " )
        {
            alert(`pls enter string!!!`); 
        }
        else
        {
        const check =  /^(\s+\w?)*\s*$/;
        if (check.test(this.state.para)) 
        {
            this.setState({ op: this.state.para })
        }
        else 
        {
            var str = "";
            var ans1 = "";
            var str11 = this.state.para;
            if (this.state.para.charAt(this.state.para.length - 1) !== ".") 
            {
                str = this.state.para + ".";
                ans1 = this.logic(str);
            }
            else 
            {
                str = this.state.para;
                ans1 = this.logic(str);
            }
            if(str11.charAt(str11.length-1) !== ".")
            {
                var ans="";
                for(var o=0 ; o < ans1.length-2; o++)
                {
                    ans += ans1[o];
                }
                this.setState({
                    op: ans
                })
            }
            else
            {
                this.setState({
                    op: ans1
                })
            }
        }
    }

    }

    handleSubmit = event => {
        event.preventDefault()
    }

    render() {
        const { para, word, op } = this.state
        return (
            <form  onSubmit={this.handleSubmit}>
                <table border='0' width='480px' cellpadding='0' cellspacing='10' align='center' >
                    <tr>
                        <td><label>Enter Paragraph :</label></td>
                        <td><textarea
                            value={para}
                            onChange={this.handleparaChange}
                        /></td>
                        <br />
                    </tr>
                    <tr>
                        <td><label>No. of words :</label></td>
                        <td><input
                            type="text"
                            value={word}
                            onChange={this.handlewordChange}                            
                            pattern="[0-9]*"
                        /></td>
                        <br />
                    </tr>
                    <tr><td align='center' ></td>
                    <td align='center'>
                        <button margin= "8px" onClick={this.btnclick.bind(this)}>Run</button></td></tr>
                    <div></div><br />
                    <tr>
                        <td><label>Result :</label></td>
                        <td><textarea
                            value={op}
                            onChange={this.handleopChange}
                        /></td>
                        <br />
                    </tr>
                </table>
            </form>


        )
    }
}

export default Form