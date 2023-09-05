<?php

namespace application\lib;

class Pagination {
    private $max = 10;
    private $routeParams;
    private $index = '';
    private $current_page;
    private $total;
    private $limit;
    private $amount;

    public function __construct($routeParams, $total, $limit = 10) {
        $this->routeParams = $routeParams;
        $this->total = $total;
        $this->limit = $limit;
        $this->amount = $this->getAmount();
        $this->setCurrentPage();
    }

    public function getPages() {
        $links = null;
        $limits = $this->getLimits();
        $html = '<nav><ul class="pagination">';

        for ($page = $limits[0]; $page <= $limits[1]; $page++) {
            if ($page == $this->current_page) {
                $links .= '<li class="page-item active"><span class="page-link">'.$page.'</span></li>';
            }

            else {
                $links .= $this->generateHtml($page);
            }
        }

        if (!is_null($links)) {
            if ($this->current_page > 1) {
                $links = $this->generateHtml(1, '<<').$links;
            }

            if ($this->current_page < $this->amount) {
                $links .= $this->generateHtml($this->amount, '>>');
            }
        }

        $html .= $links.'</ul></nav>';
        return $html;
    }

    private function generateHtml($page, $text = null) {
        if (!$text) {
            $text = $page;
        }

        return '<li class="page-item"><a class="page-link" href="?page='.$page.'">'.$text.'</a></li>';
    }

    private function getLimits() {
        $left = $this->current_page - round($this->max / 2);
        $start = $left > 0 ? $left : 1;

        if ($start + $this->max <= $this->amount) {
            $end = $start > 1 ? $start + $this->max : $this->max;
        }

        else {
            $end = $this->amount;
            $start = $this->amount - $this->max > 0 ? $this->amount - $this->max : 1;
        }

        return array($start, $end);
    }

    private function setCurrentPage() {
        if (isset($this->routeParams['page'])) {
            $currentPage = $this->routeParams['page'];
        }

        else {
            $currentPage = 1;
        }

        $this->current_page = $currentPage;

        if ($this->current_page > 0) {
            if ($this->current_page > $this->amount) {
                $this->current_page = $this->amount;
            }
        }

        else {
            $this->current_page = 1;
        }
    }

    private function getAmount() {
        return ceil($this->total / $this->limit);
    }
}
