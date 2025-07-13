const commentsTree = {
  id: 1,
  text: "Как вам новый iPhone 15?",
  author: "user123",
  replies: [
    {
      id: 2,
      text: "Дорого, но круто!",
      author: "user456",
      replies: [
        {
          id: 4,
          text: "Согласен, батарея стала лучше",
          author: "user789",
          replies: []
        }
      ]
    },
    {
      id: 3,
      text: "Лучше Android :)",
      author: "user000",
      replies: [
        {
          id: 5,
          text: "Спорное утверждение...",
          author: "user123",
          replies: []
        }
      ]
    }
  ]
};

function traverseComments(comment, depth = 0) {
  if (!comment) return;
  
  // Отступ в зависимости от уровня вложенности
  const indent = "  ".repeat(depth);
  console.log(`${indent}${comment.author}: ${comment.text}`);
  
  // Рекурсивно обходим все ответы
  comment.replies.forEach(reply => traverseComments(reply, depth + 1));
}

// Запускаем обход
traverseComments(commentsTree);