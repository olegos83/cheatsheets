<header class="masthead" style="background-image: url('public/images/home-bg.jpg')">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">
                <div class="page-heading">
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
            <h2><?php echo htmlspecialchars($post['title'], ENT_QUOTES); ?></h2>
            <p><?php echo htmlspecialchars($post['description'], ENT_QUOTES); ?></p>
            <p><?php echo htmlspecialchars($post['text'], ENT_QUOTES); ?></p>
        </div>
    </div>
</div>
