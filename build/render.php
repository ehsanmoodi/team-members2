<?php
$placeholder_image = plugins_url('/src/assets/avatar-placeholder.webp', __DIR__);
$response = wp_remote_get('https://my-json-server.typicode.com/ehsanmoodi/members/items');
$members = json_decode(wp_remote_retrieve_body($response), true);

$context = array('title' => $attributes['title'], 'showAsGrid' => $attributes['showAsGrid']);
?>

<div
  <?php echo get_block_wrapper_attributes(); ?>
  data-wp-interactive="team-member2"
  <?php echo wp_interactivity_data_wp_context($attributes) ?>>

  <div class="block">
    <?php if (!empty($context['title'])): ?>
      <p class="title" data-wp-text="context.title">
      </p>
    <?php endif; ?>

    <?php if (empty($members)): ?>
      <p class="no-data"><?php echo esc_html('No members found!'); ?></p>
    <?php else: ?>
      <div class="members"
        data-wp-class--members--list="!context.showAsGrid"
        data-wp-class--members--grid="context.showAsGrid">
        <?php foreach ($members as $member): ?>
          <div class="member">
            <div class="member__image">
              <?php if (!empty($member['image'])) : ?>
                <img src=" <?php echo esc_url($member['image']); ?>" alt="<?php echo esc_attr('avatar of ' . $member['name']); ?>" />
              <?php else : ?>
                <img src="<?php echo esc_url($placeholder_image); ?>" alt="avatar placeholder" />
              <?php endif; ?>
            </div>

            <div class="member__meta">
              <?php echo esc_html($member['name']); ?>
              <span><?php echo esc_html($member['role']); ?></span>
            </div>
          </div>
        <?php endforeach; ?>
      </div>
    <?php endif; ?>
  </div>
</div>