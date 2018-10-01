<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as BaseVerifier;

class VerifyCsrfToken extends BaseVerifier
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array
     */
    protected $except = ['api/login','api/register','api/logout','api/password/email','api/password/reset','api/createcompany', 'api/updatecompany','api/createform', 'api/updateform','api/createquestion', 'api/updatequestion','api/createoption', 'api/updateoption', 'api/createadminsurvey', 'api/updateadminsurvey'];
}
