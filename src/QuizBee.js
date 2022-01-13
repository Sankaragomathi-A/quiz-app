import React from 'react';
import './quizstyle.css'
import quizService from './quizService';
import QuestionBox from './QuestionBox'
import Result from './Result'


class QuizBee extends  React.Component{
 
   state={
         questionbank:[],
         score:0,
         response:0
      };
     
   
   getQuestions=()=>{
   quizService().then(question=> {
      this.setState({questionbank:question}) 
   })
   
}
computeAnswer=(answer,correctAnswer)=>{
   if(answer === correctAnswer){
      this.setState({
         score:this.state.score + 1
      })
   }
   this.setState({response: this.state.response<5 ? this.state.response + 1 :5})
}

playagain =()=>{
   this.getQuestions();
   this.setState({
      score:0,
      response:0
   })
}

componentDidMount() {
   this.getQuestions();
   }

   render() {
   return(
      <div className='container mt-5'>
      <div className='title mt-3'>QuizBee</div>
      {this.state.questionbank.length>0 &&
      this.state.response<5 &&
       this.state.questionbank.map(
          ({question,answers,correct,questionId})=> (
             <QuestionBox 
             question={question}
             options={answers}
             key={questionId}
             selected={answer =>this.computeAnswer(answer,correct)} />
          )
        )}

        {this.state.response === 5 ?(
        <Result score={this.state.score} playagain={this.playagain}/>):null}
      </div>
   )
       }
      }
      export default QuizBee
    


      
    















































































