@comments.each do |comment|
  json.set! comment.id do
    json.username comment.user.username
    json.author_id comment.author_id
    json.body comment.body
  end
end
