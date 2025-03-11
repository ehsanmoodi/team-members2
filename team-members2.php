<?php

/**
 * Plugin Name:       Team Members2
 * Description:       Display the list of team members
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            Ehsan Moodi
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       team-members2
 *
 * @package           moodi
 */

if (! defined('ABSPATH')) {
	exit;
}

function block_init()
{
	register_block_type_from_metadata(__DIR__ . '/build');
}
add_action('init', 'block_init');

/**
 * I have used an external API to fetch the team members.
 * but if I wanted to use a custom rest route, I would use the following code:
 * and use this url in the fetch request: /wp-json/custom-api/v1/members
 * to get the data.
 */
function get_team_members()
{
	$members = array(
		array(
			'name' => 'Alice Johnson',
			'role' => 'Team Lead',
			'image' => 'https://i.pravatar.cc/300?img=1',
		),
		array(
			'name' => 'Bob Smith',
			'role' => 'Software Engineer',
			'image' => 'https://i.pravatar.cc/300?img=2',
		),
	);

	return rest_ensure_response($members);
}

function register_members_rest_route()
{
	register_rest_route('custom-api/v1', '/members', array(
		'methods' => 'GET',
		'callback' => 'get_team_members',
		'permission_callback' => '__return_true',
	));
}

add_action('rest_api_init', 'register_members_rest_route');
