import "./ChatInABoxSection.css";
import FeatureItem from "./FeatureItem";
import ChatItem from "./ChatItem";

function ChatInABoxSection() {
    return (
        <div className={'chat-section-wrapper'}>
            <div className={'chat-section-header'}>Key Features</div>
            <div className={'item-group'}>
                <FeatureItem image={'integration.svg'} title={['Effortless',<br/>,'Integration']} text={'Easily upload and organize your documents, allowing the chatbot to access a comprehensive knowledge base.'}/>
                <FeatureItem image={'search.svg'} title={['Smart',<br/>,'Search']} text={'Our chatbot employs advanced natural language processing to understand your questions, ensuring accurate and relevant results.'}/>
                <FeatureItem image={'multi-document-support.svg'} title={['Multi-Document',<br/>,'Support']} text={'Upload and manage multiple documents simultaneously, maximizing the depth and breadth of information at your fingertips.'}/>
                <FeatureItem image={'lightning-fast-answers.svg'} title={['Lightning-Fast',<br/>,'Answers']} text={'Get instant responses to your queries, drawing on a wealth of information stored in your uploaded documents.'}/>
            </div>
            <div className={'chat-section-header'}>How it works</div>
            <div className={'item-group'}>
                <ChatItem image={'upload.svg'} title={'Upload Your Data Collection'} text={'Our chatbot can handle a variety of filetypes like PDFs, Excel files, webpages and many other. With that, you can create a comprehensive knowledge base.'} />
                <ChatItem image={'ask.svg'} title={'Ask Questions'} text={'Engage with the chatbot by typing or speaking your questions in natural language. There’s no need for complex commands or technical jargon.'} />
                <ChatItem image={'analysis.svg'} title={'Instant Analysis'} text={'The chatbot leverages advanced natural language processing and machine learning to understand your queries and scans through the uploaded documents.'} />
                <ChatItem image={'undo.svg'} title={'Quick Retrieval'} text={'Within seconds, it retrieves precise answers and relevant information from your documents, delivering them directly to you.'} />
            </div>
        </div>
    )
}

export default ChatInABoxSection;
