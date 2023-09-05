<div class="content-wrapper">
    <div class="container-fluid">
        <div class="card mb-3">
            <div class="card-header">Posts</div>
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-4">
                        <?php if (empty($posts)): ?>
                            <p>No posts</p>
                        <?php else: ?>
                            <table class="table">
                                <tr>
                                    <th>Title</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                                <?php foreach ($posts as $post): ?>
                                    <tr>
                                        <td style="vertical-align: middle;"><?php echo htmlspecialchars($post['title'], ENT_QUOTES); ?></td>
                                        <td><a href="../admin/edit?id=<?php echo $post['id']; ?>" class="btn btn-primary">Edit</a></td>
                                        <td><a href="../admin/delete?id=<?php echo $post['id']; ?>" class="btn btn-danger">Delete</a></td>
                                    </tr>
                                <?php endforeach; ?>
                            </table>
                            <?php echo $pages; ?>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
