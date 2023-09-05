<header class="masthead" style="background-image: url('public/images/home-bg.jpg')">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">
                <div class="site-heading">
                    <h1>SmallMVC</h1>
                    <span class="subheading">simple MVC framework</span>
                </div>
            </div>
        </div>
    </div>
</header>
<div class="container">
    <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
            <h4>SmallMVC home page</h4>
            <?php if (empty($posts)): ?>
                <p>No posts</p>
            <?php else: ?>
                <?php foreach ($posts as $post): ?>
                    <div class="post-preview">
                        <a href="post?id=<?php echo $post['id']; ?>">
                            <h3 class="post-title"><?php echo htmlspecialchars($post['title'], ENT_QUOTES); ?></h3>
                            <h5 class="post-subtitle"><?php echo htmlspecialchars($post['description'], ENT_QUOTES); ?></h5>
                        </a>
                    </div>
                    <hr>
                <?php endforeach; ?>
                <div class="clearfix">
                    <?php echo $pages; ?>
                </div>
            <?php endif; ?>
        </div>
    </div>
</div>
