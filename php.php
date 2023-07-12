<!DOCTYPE html>
<html>
<head>
    <title>网址大全</title>
</head>
<body>
    <h1>网址大全</h1>
    <ul>
        <?php
            // 网址数组
            $urls = [
                ['name' => 'Google', 'url' => 'https://www.google.com/'],
                ['name' => 'Baidu', 'url' => 'https://www.baidu.com/'],
                ['name' => 'Facebook', 'url' => 'https://www.facebook.com/'],
                ['name' => 'Twitter', 'url' => 'https://twitter.com/'],
                ['name' => 'GitHub', 'url' => 'https://github.com/'],
                ['name' => 'LinkedIn', 'url' => 'https://www.linkedin.com/'],
            ];

            // 遍历数组输出网址列表
            foreach ($urls as $url) {
                echo '<li>' . $url['name'] . '</li>';
            }
        ?>
    </ul>
</body>
</html>