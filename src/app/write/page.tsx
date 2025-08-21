export default function Write(){
    return (
        <div>
            <h4>글작성 </h4>
            <form action="/api/posts" method= "POST">
                <input type="text" name="title" placeholder="제목" />
                <input type="text" name="content" placeholder="내용" />
                
                <button type="submit">버튼</button>
            </form>
        </div>
    )
}