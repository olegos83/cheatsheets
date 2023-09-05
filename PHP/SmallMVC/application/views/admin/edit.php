<div class="content-wrapper">
    <div class="container-fluid">
        <div class="card mb-3">
            <div class="card-header">Edit post</div>
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-4">
                        <form action="../admin/edit" method="post">
                            <input type="hidden" name="id" value="<?php echo $post['id']; ?>">
                            <div class="form-group">
                                <label>Title</label>
                                <input class="form-control" type="text" name="title" value="<?php echo htmlspecialchars($post['title'], ENT_QUOTES); ?>">
                            </div>
                            <div class="form-group">
                                <label>Description</label>
                                <input class="form-control" type="text" name="description" value="<?php echo htmlspecialchars($post['description'], ENT_QUOTES); ?>">
                            </div>
                            <div class="form-group">
                                <label>Text</label>
                                <textarea class="form-control" rows="3" name="text"><?php echo htmlspecialchars($post['text'], ENT_QUOTES); ?></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary btn-block">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
