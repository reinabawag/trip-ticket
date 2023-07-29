<template>
    <div class="row row-cols-1 row-cols-md-3 g-4 mt-2">
        <div class="col">
            <div class="card border-success bg-body-tertiary">
                <div class="card-header border-success text-bg-success">
                    Available
                </div>
                <div class="card-body">
                    <p class="card-text ">
                        <div class="d-flex justify-content-center">
                            <h1 class="display-6 fw-semibold text-success">{{ $page.props.availability.available }}</h1>
                        </div>
                    </p>
                </div>
            </div>
        </div>

        <div class="col">
            <div class="card border-warning bg-body-tertiary">
                <div class="card-header border-warning text-bg-warning">
                    Reserved
                </div>
                <div class="card-body">
                    <p class="card-text">
                        <div class="d-flex justify-content-center">
                            <h1 class="display-6 fw-semibold text-warning">{{ $page.props.availability.reserved }}</h1>
                        </div>
                    </p>
                </div>
            </div>
        </div>

        <div class="col">
            <div class="card border-danger bg-body-tertiary">
                <div class="card-header border-danger  text-bg-danger ">
                    Not Available
                </div>
                <div class="card-body">
                    <p class="card-text">
                        <div class="d-flex justify-content-center">
                            <h1 class="display-6 fw-semibold text-danger">{{ $page.props.availability.notAvailable }}</h1>
                        </div>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
};
</script>
